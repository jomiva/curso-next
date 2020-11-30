import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head />
        <body className="my-body-className">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
