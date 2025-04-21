import mongoose, {Schema} from "mongoose";

const subscriptionSchema = new Schema({
    subscriber: {
        type: Schema.Types.Object,  // one who is subscribing
        ref: "User"
    },
    channel: {
        type: Schema.Types.Object,  // one to whom 'subscriber' is subscribing
        ref: "User"
    },    

}, { timestamps: true });

export const Subscription = mongoose.model("Subscription", subscriptionSchema);
