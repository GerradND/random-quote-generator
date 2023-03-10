import React, { ChangeEvent, useState } from "react";
import Head from "next/head";
import { NextPage } from "next";
import getConfig from "next/config";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Button from "../components/Button";
import DropdownComponent from "../components/Dropdown/DropdownComponent";
import Modal from "../components/Modal";

interface IData {
  id: number;
  number_of_people: number;
  sentences: string;
}

const { publicRuntimeConfig } = getConfig();
const Home: NextPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [value, setValue] = useState("");
  const [num, setNum] = useState(1);
  const [data, setData] = useState<IData>();

  var parse = require("html-react-parser");

  const baseUrl = `${publicRuntimeConfig.API_URL!}api/v1`;

  const generateQuote = async () => {
    const response = await fetch(
      `${baseUrl}/generate-quote?number_of_people=${num}&names=${value.replaceAll(
        "\n",
        ","
      )}`,
      {
        method: "GET",
        mode: "cors",
        headers: { "Content-Type": "application/json" },
      }
    );
    const resData = await response.json();
    if (!response.ok) {
      toast.error("Error: " + resData.error);
    } else {
      setData(resData.data);
    }
  };

  const shuffleNames = async () => {
    const response = await fetch(
      `${baseUrl}/shuffle-quote?number_of_people=${num}&names=${value.replaceAll(
        "\n",
        ","
      )}&quote_id=${data?.id}`,
      {
        method: "GET",
        mode: "cors",
        headers: { "Content-Type": "application/json" },
      }
    );
    const resData = await response.json();
    if (!response.ok) {
      toast.error("Error: " + resData.error);
    } else {
      setData(resData.data);
    }
  };

  function openModal() {
    setIsOpen(true);
  }

  const sentences = data ? data.sentences : "";

  return (
    <>
      <Head>
        <title>Random Quote Generator</title>
        <meta name="description" content="Generate a random quote" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex flex-col justify-center items-center">
        {/* code starts here */}
        <h1 className="pt-10 pb-4 text-center">Random Quote Generator!</h1>

        {/* about modal*/}
        <Modal isOpen={isOpen} setIsOpen={setIsOpen} />
        <button
          onClick={openModal}
          className="font-medium underline rounded mb-8 px-3 py-1 mx-2 my-2 hover:bg-gray-100 duration-75"
        >
          About / Help
        </button>

        {/* input field */}
        <div className="flex justify-center items-center">
          <p className="text-lg pr-3">Number of People: </p>

          {/* dropdown */}
          <DropdownComponent num={num} setNum={setNum}></DropdownComponent>
        </div>

        <form className="p-4">
          <textarea
            className="border-2 border-black resize rounded"
            rows={4}
            onChange={(event: ChangeEvent<HTMLTextAreaElement>) =>
              setValue(event.target.value)
            }
            placeholder="Your favorite names..."
          ></textarea>
        </form>

        {/* execute button */}
        <div className="flex flex-col sm:block">
          <Button text="Generate Quote" value={value} getData={generateQuote} />
          <Button text="Shuffle Names" value={value} getData={shuffleNames} />
        </div>

        <ToastContainer autoClose={2000} />

        {/* quotes */}
        <div className="py-4 px-4 text-left sm:w-[600px] ">
          {parse(sentences)}
        </div>

        <div className="my-8 text-center text-sm text-gray-500 italic">
          &#8226; Made for Kowan Final Project &#8226;
        </div>
      </main>
    </>
  );
};

Home.getInitialProps = () => {
  return {};
};

export default Home;
