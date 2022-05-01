import sanityClient from "@sanity/client";

export const client = sanityClient({
    projectId: "nyzy1bzq",
    dataset: "production",
    apiVersion: "2021-03-25",
    token: "sk07LfFOGpJjNyFEDkwTnxg2tkiIn82NLf2wmieh95gkiVKcHXwZdZY61wX1rD0MIxml5GUDbAFbNFljhplqgLNo0Jqt2FA8S5jaSXhKmqfuROwwGu4i7e4KASp4r1sT7l5wpoGuDybe1z6ZqUk5F5UuMQeBCEufImT0ck7NBf6HwuOyoZWS",
    useCdn: false,
});
