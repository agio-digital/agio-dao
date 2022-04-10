import { generate } from "@graphql-codegen/cli";

const generateTypes = async () => {
  try {
    await generate(
      {
        schema: "./src/codegen/schema.graphql",
        documents: [
          "./src/**/*.tsx",
          "./src/**/*.ts",
          "./src/**/*.graphql",
          "./src/**/*.gql",
        ],
        overwrite: true,
        generates: {
          "./src/codegen/graphql.ts": {
            plugins: ["typescript", "typescript-operations"],
            config: {
              withCompositionFunctions: true,
              skipTypename: true,
            },
          },
        },
      },
      true
    );
    console.log("Generated ./src/codegen/graphql.ts");
    return true;
  } catch (err) {
    console.log("error:", err);
    process.exit(1);
  }
};

generateTypes();
