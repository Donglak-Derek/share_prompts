import { Schema, model, models } from "mongoose";

const PromptSchema = new Schema({
  creator: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  prompt: {
    type: String,
    required: [true, "Prompt is required."],
  },
  tag: {
    type: String,
    required: [true, "Tag is required."],
  },
});
const Prompt = models.Prompt || model("Prompt", PromptSchema);

export default Prompt;

// The "models" object is provided by the Mongoose library and stores all the registered models.
// If a model named "Prompt" already exists in the "models" object, it assigns that existing model to the "Prompt" variable.
// This prevents redefining the model and ensures that the existing model is reused.
// If a model named "Prompt" already exists in the "models" object, the "model" function from Mongoose is called to create a new model
// The newly created model is then assigned to the "Prompt" variable
