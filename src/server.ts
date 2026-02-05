import app from "./app";

const port = process.env.PORT || 5000;

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
