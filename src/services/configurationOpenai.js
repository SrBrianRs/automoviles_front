import { Configuration, OpenAIApi } from "openai";

export const openaiConfig = {
  getOpenai: function () {
    const configuration = new Configuration({
      apiKey: "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",
    });

    if (!configuration.apiKey) {
      throw new Error("OpenAI API key not configured, please follow instructions in README.md");
    }

    return new OpenAIApi(configuration);
  }
};
