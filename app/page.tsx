/** @format */

"use client";
import CooperativeVision from "@/components/cooperativevision";
import PDFViewer from "@/components/pdf-viewer";
import ProductPage from "@/components/products";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
// import Image from "next/image";
import React from "react";
import { useState } from "react";
import Image from "next/image";
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
    <div className='container flex flex-col h-screen items-center justify-center'>
      {!isPinVerified ? (
        <div className='flex flex-col items-center justify-center'>
          <Image
            src={"/products/dxvalleylogo.png"}
            alt='Dx Valley'
            width={500} // adjust the width as needed
            height={200}
            className='mx-auto mb-4 '
          />
          <p className='mb-4 text-lg font-medium'>Enter PIN to Access</p>
          <Input
            type='password'
            value={pin}
            placeholder='Enter Password'
            onChange={(e) => setPin(e.target.value)}
            className='mb-2 max-w-xs'
          />
          {/* Error Message */}
          {errorMessage && (
            <span className='text-red-500 text-sm'>{errorMessage}</span>
          )}
          <Button onClick={handlePinSubmit} className='bg-[#00adef] mt-2'>
            Submit Password
          </Button>
        </div>
      ) : (
        <div className='grid grid-cols-2 gap-4'>
          <div className='space-y-4'>
            <CooperativeVision />
            <div className='h-[330px] mx-auto'>
              <PDFViewer fileUrl='/THE STORY OF FATIMA.pdf' />
            </div>
          </div>
          <div className='h-[660px] overflow-y-auto'>
            <ProductPage />
          </div>
        </div>
      )}
    </div>
  );
};

export default Page;
