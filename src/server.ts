import app from "./app";
import { envVars } from "./app/config/env";

const port = process.env.PORT || envVars.PORT;

const main = () => {
  try {
    app.listen(port, () => {
      console.log(`Server is running on http://localhost:${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};

main();
