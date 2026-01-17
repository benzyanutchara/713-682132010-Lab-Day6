import {S3Client} from "@aws-sdk/client-s3";

const s3Client = new S3Client({
      credentials: {
        accessKeyId: "afe83cf115c0a10be292e1a666acf77c",
            secretAccessKey:
          "601771e14ae29f9cc5df5658c07dc0cc764f4754246873a681b66a0198c6dc95"
      },
  endpoint: "https://yxwjlngmeemgfbzhigyd.storage.supabase.co/storage/v1/s3",
      region: "ap-south-1",
      forcePathStyle: true


    });
export default s3Client;


