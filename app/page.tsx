/** @format */

"use client";
import CooperativeVision from "@/components/cooperativevision";
import PDFViewer from "@/components/pdf-viewer";
import ProductPage from "@/components/products";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
// import Image from "next/image";
import React, { useState } from "react";
import Image from "next/image";
function RadioToggleProductView() {
  const [showProduct, setShowProduct] = useState(true);
  return (
    <div className="flex flex-col items-center w-full">
      <div className="mb-6 flex gap-4">
        <label className="flex items-center gap-2">
          <input
            type="radio"
            name="viewToggle"
            checked={showProduct}
            onChange={() => setShowProduct(true)}
          />
          Show Product Page
        </label>
        <label className="flex items-center gap-2">
          <input
            type="radio"
            name="viewToggle"
            checked={!showProduct}
            onChange={() => setShowProduct(false)}
          />
          Show Global MSME Award
        </label>
      </div>
      {showProduct ? (
        <div className="grid grid-cols-2 gap-4 w-full">
          <div className="space-y-4">
            <CooperativeVision />
            <div className="h-[330px] mx-auto">
              <PDFViewer fileUrl="/THE STORY OF FATIMA.pdf" />
            </div>
          </div>
          <div className="h-[660px] overflow-y-auto">
            <ProductPage />
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center w-full">
          <Image
            src="/global-msme-award.jpg"
            alt="Global MSME Award"
            width={600}
            height={500}
          />
        </div>
      )}
    </div>
  );
}

const Page = () => {
  const [pin, setPin] = useState("");
  const [isPinVerified, setIsPinVerified] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const handlePinSubmit = () => {
    if (pin === "DxOngoing123") {
      setIsPinVerified(true);
      setErrorMessage(""); // Clear error message on successful verification
    } else {
      setErrorMessage("Incorrect Password. Please try again.");
    }
  };

  return (
    <div className="container flex flex-col h-screen items-center justify-center">
      {!isPinVerified ? (
        <div className="flex flex-col items-center justify-center">
          <Image
            src={"/products/dxvalleylogo.png"}
            alt="Dx Valley"
            width={500} // adjust the width as needed
            height={200}
            className="mx-auto mb-4 "
          />
          <p className="mb-4 text-lg font-medium">Enter PIN to Access</p>
          <Input
            type="password"
            value={pin}
            placeholder="Enter Password"
            onChange={(e) => setPin(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handlePinSubmit();
              }
            }}
            className="mb-2 max-w-xs"
          />
          {/* Error Message */}
          {errorMessage && (
            <span className="text-red-500 text-sm">{errorMessage}</span>
          )}
          <Button onClick={handlePinSubmit} className="bg-[#00adef] mt-2">
            Submit Password
          </Button>
        </div>
      ) : (
        // <RadioToggleProductView />
        <div className="grid grid-cols-2 gap-4 w-full">
          <div className="space-y-4">
            <CooperativeVision />

            {/* this div is for the image */}
            <div className="mx-auto">
              {/* <div className='h-[330px] mx-auto'> */}
              {/* <PDFViewer fileUrl='/THE STORY OF FATIMA.pdf' /> */}
              <div className="flex flex-col items-center w-full">
                <div className="mb-2 flex gap-2">
                  {" "}
                  <Image
                    src="/global-msme-award.jpg"
                    // src="/top-100-african-banks.jpeg"
                    alt="Global MSME Award"
                    width={300}
                    height={300}
                  />
                  <Image
                    // src="/global-msme-award.jpg"
                    src="/top-100-african-banks.jpeg"
                    alt="Global MSME Award"
                    width={300}
                    height={200}
                  />{" "}
                </div>
              </div>
            </div>
          </div>
          <div className="h-[660px] overflow-y-auto">
            <ProductPage />
          </div>
        </div>
      )}
    </div>
  );
};

// Removed duplicate RadioToggleProductView and misplaced bracket
export default Page;
