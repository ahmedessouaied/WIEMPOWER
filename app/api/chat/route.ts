import { mistral } from "@ai-sdk/mistral";
import { streamText } from "ai";

const ai = mistral(process.env.MISTRAL_API_KEY);

export const maxDuration = 30;
// const firebaseConfig = {
//   credential: cert(require("./path/to/serviceAccountKey.json")),
//   databaseURL: "https://<your-project-id>.firebaseio.com",
// };
export async function POST(req: Request) {
  try {
    const { messages } = await req.json();

    const result = await streamText({
      model: mistral("pixtral-12b-2409"),
      system: `As a secondary school STEM teacher, please describe the contents of the uploaded image. If the image shows a math problem-solving draft, ensure that any LaTeX formulas are correctly transcribed. For any other type of content, provide a general description of the image. If the student tries to speak or pose the problem in a language other than English, kindly apologize and ask them to pose the problem in English`,
      messages,
    });
    const response = result.toDataStreamResponse();

    const responseText = await response.text();

    const cleanResponse = responseText
      .split("\n")
      .filter((line) => !line.startsWith("e:") && !line.startsWith("d:"))
      .map((line) => {
        const matches = line.match(/0:"([^"\\]*(\\.[^"\\]*)*)"/g) || [];
        return matches
          .map((match) => {
            return match
              .replace(/^0:"/, "")
              .replace(/"$/, "")
              .replace(/\\"/g, '"')
              .replace(/\\n/g, "\n");
          })
          .join("");
      })
      .join("")
      .replace(/\s+([.,!?])/g, "$1")
      .replace(/\s+/g, " ")
      .trim();

    const mistralLargeResponse = await streamText({
      model: mistral("mistral-large-latest"),
      system: `You are an experienced secondary school STEM teacher. Based on the provided Problem, Correct Answer, and a Student's Incorrect Answer, analyze and infer the cause of the student's mistake. The error could stem from a lack of understanding of a specific concept (i.e., the student may not know how to approach the problem or lacks a clear strategy). Alternatively, the mistake might be due to non-conceptual reasons, such as misreading the problem, carelessness, symbol misinterpretation, or errors in copying steps or answers. We have also provided an analysis of the student's draft, which typically represents their thought process, along with a Draft Analysis. If the student tries to speak or pose the problem in a language other than English, kindly apologize and ask them to pose the problem in English`,
      messages: [{ role: "user", content: `${cleanResponse}` }],
    });
    // console.log(result.toDataStreamResponse());
    return mistralLargeResponse.toDataStreamResponse();
  } catch (error) {
    console.error("Error in chatbot API:", error);
    return new Response("Error processing request", { status: 500 });
  }
}
