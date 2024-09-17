import * as sdk from "node-appwrite";

export const {
  PROJECT_ID,
  API_KEY,
  DATABASE_ID,
  PATIENT_COLLECTION_ID,
  DOCTOR_COLLECTION_ID,
  APPOINTMENT_COLLECTION_ID,
  NEXT_PUBLIC_BUCKET_ID: BUCKET_ID,
  NEXT_PUBLIC_ENDPOINT: ENDPOINT,
} = process.env;

const client = new sdk.Client();

client
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject("66e9452d000d24076e00")
  .setKey(
    "standard_34ba364ddcdb06510f306d86cc269a2c438140d26f8dc0e9a08d66e4f3a6dabcf9e3a0176b1b2853f7ca1265953d0bec41ed55553a2781b11b9fdcfaaac8495cc436cf94bb7120b734362ef0381048a0e1f903516d9d11c80c2fdbbec41333273c3c3716a4f8d6c6274906c6ccec8997b26e13e45c487615acddc69b9cbc28e1"
  );

export const databases = new sdk.Databases(client);
export const users = new sdk.Users(client);
export const messaging = new sdk.Messaging(client);
export const storage = new sdk.Storage(client);
