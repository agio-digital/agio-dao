import util from "util";
import cp from "child_process";
import { config } from "dotenv";
import { GRAPH_HTTP_URL } from "../../src/config";

config();

const exec = util.promisify(cp.exec);

const downloadSchema = async () => {
  try {
    const script = `gq ${GRAPH_HTTP_URL} --introspect > src/codegen/schema.graphql`;
    const { stdout, stderr } = await exec(script);
    console.log("stdout:", stdout);
    console.log("stderr:", stderr);
    console.log(`Schema exported to ./src/codegen/schema.graphql`);
  } catch (err) {
    console.log("error:", err);
    process.exit(1);
  }
};

downloadSchema();
