/** @format */

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import {
  Download,
  ExternalLink,
  House,
  NotepadText,
  Sparkles,
  Youtube,
} from "lucide-react";
import { Product } from "@/types";
import { products } from "@/constants";
import YouTubePlayer from "./YouTubePlayer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "./ui/input";
import ImageSlider from "./ImageSlider";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
export default function ProductPage() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [showVideo, setShowVideo] = useState(false);
  const [activeTab, setActiveTab] = useState("dxvalleyProducts");
  const [pin, setPin] = useState("");
  const [isPinVerified, setIsPinVerified] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleProductSelect = (product: Product) => {
    setSelectedProduct(product);
    setShowVideo(false); // reset video view on product selection
  };

  const handleOpenLink = (url: string | undefined) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const handleDownload = (file: string | undefined) => {
    const filePath = `/slides/${file}`;
    const link = document.createElement("a");
    link.href = filePath;
    link.download = `${file}`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleBackToList = () => {
    if (selectedProduct) {
      const tab =
        selectedProduct.type === "corebankingapp"
          ? "coreBankingProducts"
          : "dxvalleyProducts";

      setActiveTab(tab);
    }
    setSelectedProduct(null);
  };

  const toggleContent = () => {
    setShowVideo((prev) => !prev);
  };

  if (selectedProduct) {
    return (
      <div className="flex flex-col h-[660px]">
        <main className="flex-grow overflow-auto">
          <Card className="h-full flex flex-col">
            <CardHeader>
              <CardTitle className="text-2xl mb-4">
                {selectedProduct.name}
              </CardTitle>
            </CardHeader>
            <CardContent className="relative flex-grow flex flex-col md:flex-row gap-6">
              <div className="absolute bottom-0 right-0 text-orange-100 w-12 h-12 sm:w-16 sm:h-16">
                <Sparkles className="w-full h-full" />
              </div>
              <div className="w-full md:w-1/3 flex flex-col space-y-4">
                <Image
                  src={selectedProduct.imageUrl}
                  alt={selectedProduct.name}
                  width={300}
                  height={300}
                  className="rounded-lg object-cover w-full"
                />

                <div className="flex-grow overflow-auto mb-4"></div>
                {selectedProduct.file && (
                  <Button
                    onClick={() => handleDownload(selectedProduct.file)}
                    className="bg-[#00adef]"
                  >
                    <Download className="mr-2 h-4 w-4" /> Download PPT
                  </Button>
                )}
                {selectedProduct.video && (
                  <Button onClick={toggleContent} className="bg-[#00adef]">
                    {showVideo ? (
                      <NotepadText className="mr-2 h-6 w-6" />
                    ) : (
                      <Youtube className="mr-2 h-6 w-6" />
                    )}
                    {showVideo ? "Description" : "Watch Video"}
                  </Button>
                )}

                {selectedProduct.link && (
                  <Button
                    onClick={() => handleOpenLink(selectedProduct.link)}
                    className="bg-[#00adef]"
                  >
                    <ExternalLink className="mr-2 h-4 w-4" /> Visit Site
                  </Button>
                )}
              </div>
              <div className="w-full md:w-2/3 flex flex-col">
                <div className="flex-grow overflow-none mb-4">
                  {showVideo && selectedProduct.video ? (
                    <YouTubePlayer url={selectedProduct.video} />
                  ) : (
                    <p className="text-muted-foreground">
                      {selectedProduct.description}
                      {selectedProduct.vslaPhotos && (
                        <ImageSlider vslaPhotos={selectedProduct.vslaPhotos} />
                      )}
                      {/* <ImageSlider /> */}
                    </p>
                  )}
                  {/* <ImageSlider images={imageSliderDummyProps} /> */}
                  {/* {selectedProduct && selectedProduct.vslaPhotos?.map((image, index) => (
                      // <ImageSlider key={index} vslaPhotos={[image]} />
                      <div key={index} >

                        <ImageSlider vslaPhotos={[image]} />
                        </div>
                    ))} */}
                </div>

                <div className="flex flex-col sm:flex-row justify-between items-end mt-4">
                  <div className=""></div>
                  <div className="z-10 bg-orange-100 text-orange-800 text-xs sm:text-sm font-semibold py-1 px-2 sm:py-1.5 sm:px-3 rounded-full inline-block font-['Open Sans'] shadow-md">
                    {selectedProduct.moto
                      ? selectedProduct.moto
                      : " Bank Smarter, Live Better"}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </main>
        <nav className="mt-8">
          <ScrollArea className="w-full whitespace-nowrap rounded-md border bg-white">
            <div className="flex w-max justify-center items-center hover:cursor-pointer">
              <div className="p-6 bg-white" onClick={handleBackToList}>
                <House className="h-6 w-6 text-[#00adef]" />
              </div>
              {products
                .filter((product) => {
                  if (activeTab === "coreBankingProducts") {
                    return product?.type === "corebankingapp";
                  }
                  if (activeTab === "developmentProducts") {
                    return product?.type === "underDevelopment";
                  }
                  if (activeTab === "dxvalleyProducts") {
                    return (
                      !product?.type ||
                      (product.type !== "corebankingapp" &&
                        product.type !== "underDevelopment") &&
                      product.type !== "dropdownMenu"
                    );
                  }
                  return false;
                })
                .map((product) => (
                  <div
                    key={product.id}
                    className={`p-3 bg-white ${
                      selectedProduct && product.id === selectedProduct.id
                        ? "bg-muted"
                        : ""
                    }`}
                    onClick={() => handleProductSelect(product)}
                  >
                    <Image
                      src={product.imageUrl}
                      alt={product.name}
                      width={64}
                      height={64}
                      className="rounded-md"
                    />
                    <span className="sr-only">{product.name}</span>
                  </div>
                ))}
            </div>
            <ScrollBar orientation="horizontal" />
          </ScrollArea>
        </nav>
      </div>
    );
  }

  return (
    <div className="relative flex flex-col h-full">
      <Tabs
        defaultValue="dxvalleyProducts"
        onValueChange={(value) => setActiveTab(value)}
        className="h-full flex flex-col"
      >
        {/* Tab Contents */}
        <div className="flex-grow overflow-auto">
          <TabsContent value="dxvalleyProducts">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {products
                .filter(
                  (product) =>
                    product?.type !== "corebankingapp" &&
                    product?.type !== "underDevelopment" &&
                    product?.type !== "dropdownMenu",
                )

                .map((product) => (
                  <Card
                    key={product.id}
                    className="cursor-pointer shadow-lg"
                    onClick={() => handleProductSelect(product)}
                  >
                    <CardContent className="p-2 h-[190px] flex items-center">
                      <Image
                        src={product.imageUrl}
                        alt={product.name}
                        width={400}
                        height={200}
                        className="w-full object-cover rounded-t-lg"
                      />
                    </CardContent>
                    {/* <ImageSlider /> */}
                  </Card>
                ))}
            </div>
          </TabsContent>

          <TabsContent value="coreBankingProducts">
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4">
              {products
                .filter((product) => product?.type === "corebankingapp")

                .map((product) => (
                  <Card
                    key={product.id}
                    className="cursor-pointer shadow-lg"
                    onClick={() => handleProductSelect(product)}
                  >
                    <CardContent className="p-2 h-[190px] flex items-center">
                      <Image
                        src={product.imageUrl}
                        alt={product.name}
                        width={400}
                        height={200}
                        className="w-full object-cover rounded-t-lg"
                      />
                    </CardContent>
                  </Card>
                ))}
            </div>
          </TabsContent>

          <TabsContent value="developmentProducts">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {products
                .filter((product) => product?.type === "underDevelopment")

                .map((product) => (
                  <Card
                    key={product.id}
                    className="cursor-pointer shadow-lg"
                    onClick={() => handleProductSelect(product)}
                  >
                    <CardContent className="p-2 h-[190px] flex items-center">
                      <Image
                        src={product.imageUrl}
                        alt={product.name}
                        width={400}
                        height={200}
                        className="w-full object-cover rounded-t-lg"
                      />
                    </CardContent>
                  </Card>
                ))}
            </div>
          </TabsContent>
          <TabsContent value="imageTab">
            <div className="flex justify-center items-center h-full">
              <Card className="shadow-lg max-w-2xl">
                <CardContent className="p-4">
                  <Image
                    src="/image.jpeg"
                    alt="Featured Image"
                    width={800}
                    height={600}
                    className="w-full object-cover rounded-lg"
                  />
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          {/* <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="px-4 py-2 rounded-md bg-blue-100 hover:bg-blue-200 text-sm">
                CRM Tools ▾
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-white shadow-lg rounded-md">
              <DropdownMenuItem asChild>
                <a href="/eco-branch" className="dropdown-item">
                  EcoBranch
                </a>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <a href="/smart-branch" className="dropdown-item">
                  SmartBranch
                </a>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <a href="/crm-analytics" className="dropdown-item">
                  CRM Analytics
                </a>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <a href="/eco-agent" className="dropdown-item">
                  EcoAgent
                </a>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu> */}
          {/* <TabsContent value="crmTab">


      </TabsContent> */}
        </div>

        {/* Tabs List */}
        <TabsList className="mt-auto shadow-md grid w-full grid-cols-5">
          <TabsTrigger
            value="dxvalleyProducts"
            className={activeTab === "dxvalleyProducts" ? "bg-white" : ""}
          >
            CoopBank Products
          </TabsTrigger>
          <TabsTrigger
            value="developmentProducts"
            className={activeTab === "developmentProducts" ? "bg-white" : ""}
          >
            Experiments
          </TabsTrigger>
          <TabsTrigger
            value="coreBankingProducts"
            className={activeTab === "coreBankingProducts" ? "bg-white" : ""}
          >
            Core Platforms
          </TabsTrigger>

          <TabsTrigger
            value="imageTab"
            className={activeTab === "imageTab" ? "bg-white" : ""}
          >
            Coopay Stat
          </TabsTrigger>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="px-4 py-2 rounded-md hover:bg-blue-200 text-sm text-black">
                Other Services
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-white shadow-lg rounded-md">
              {products.map((product) => {
                if (product.type === "dropdownMenu") {
                  return (
                    <DropdownMenuItem asChild key={product.id}>
                      <a
                        href={product.link}
                        className="dropdown-item"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {product.name}
                      </a>
                    </DropdownMenuItem>
                  );
                }
              })}
              {/* <DropdownMenuItem asChild>
                <a
                  href="/eco-branch"
                  className="dropdown-item"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  EcoBranch
                </a>
              </DropdownMenuItem> */}
            </DropdownMenuContent>
          </DropdownMenu>
          {/* <TabsTrigger
            value="crmTab"
            className={activeTab === "crmTab" ? "bg-white" : ""}
          >
            
          </TabsTrigger> */}
        </TabsList>
      </Tabs>
    </div>
  );
}
