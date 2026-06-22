/** @format */

"use client";
import CooperativeVision from "@/components/cooperativevision";
import EcoBranchPanel from "@/components/EcoBranchPanel";
import PDFViewer from "@/components/pdf-viewer";
import ProductPage from "@/components/products";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
// import Image from "next/image";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { preloadEcoBranchAssets } from "@/lib/eco-branch";
import { Leaf } from "lucide-react";

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
  const [showEcoBranch, setShowEcoBranch] = useState(false);

  useEffect(() => {
    if (isPinVerified) {
      preloadEcoBranchAssets();
    }
  }, [isPinVerified]);

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
        <>
          <div className="grid grid-cols-2 gap-4 w-full">
            <div className="space-y-4">
              <CooperativeVision />

              <div className="mx-auto">
                <div className="flex flex-col items-center w-full">
                  <div className="mb-2 flex gap-2">
                    <Image
                      src="/top-100-african-banks.jpeg"
                      alt="Top 100 African Banks"
                      width={300}
                      height={200}
                    />
                     <Image
                      src="/global-msme-award.jpg"
                      alt="Global MSME Award"
                      width={300}
                      height={300}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="h-[660px] overflow-y-auto">
              <ProductPage onOpenEcoBranch={() => setShowEcoBranch(true)} />
            </div>
          </div>

          {/* Floating ECO side tab — hidden while modal is open */}
          {!showEcoBranch && (
            <button
              onClick={() => setShowEcoBranch(true)}
              title="View ECO Branches"
              style={{
                position: "fixed",
                left: 0,
                top: "50%",
                transform: "translateY(-50%)",
                zIndex: 9999,
                background: "linear-gradient(180deg, #006633 0%, #00a550 100%)",
                color: "#fff",
                border: "none",
                borderRadius: "0 14px 14px 0",
                padding: "14px 20px 14px 14px",
                fontSize: "13px",
                fontWeight: 800,
                letterSpacing: "0.12em",
                cursor: "pointer",
                boxShadow: "3px 0 18px rgba(0,102,51,0.35)",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                gap: "8px",
                transition: "transform 0.25s ease, box-shadow 0.25s ease",
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLButtonElement).style.transform = "translateY(-50%) translateX(4px)";
                (e.currentTarget as HTMLButtonElement).style.boxShadow = "5px 0 28px rgba(0,165,80,0.55)";
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLButtonElement).style.transform = "translateY(-50%)";
                (e.currentTarget as HTMLButtonElement).style.boxShadow = "3px 0 18px rgba(0,102,51,0.35)";
              }}
            >
              <Leaf size={18} strokeWidth={2.5} style={{ flexShrink: 0 }} />
              <span style={{ fontWeight: 900, fontSize: "13px", letterSpacing: "0.18em" }}>ECO</span>
            </button>
          )}

          <EcoBranchPanel
            open={showEcoBranch}
            onClose={() => setShowEcoBranch(false)}
          />
        </>
      )}
    </div>
  );
};

// Removed duplicate RadioToggleProductView and misplaced bracket
export default Page;
