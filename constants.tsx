/** @format */

import { Product, DashboardStat, AwardCard } from "./types";
import { Zap, Users, CreditCard, Building2 } from "lucide-react";

// export const GAMEHUB_URL = "http://10.12.53.62:8080";
export const GAMEHUB_URL = "http://gamehub.coopbank.local";

export const products: Product[] = [
  {
    id: 1,
    name: "Coop Stream",
    description: (
      <div>
        <p className="mb-2">
          <span className="font-semibold">CoopStream</span> is CoopBank&apos;s
          <strong> digital loan origination platform </strong>that automates the entire loan process.</p>

        <p className="mb-2 font-semibold">What this means for customers?</p>

        <div className="mb-1 flex items-start">
          <p className="mr-2 font-bold">•</p>
          <p className="text-sm">
            <span className="font-semibold">Faster, predictable service</span> with standard timelines and automatic escalations.
          </p>
        </div>

        <div className="mb-1 flex items-start">
          <p className="mr-2 font-bold">•</p>
          <p className="text-sm">
            <span className="font-semibold">Transparent and accountable processing</span> through a single digital system.
          </p>
        </div>

        <div className="mb-1 flex items-start">
          <p className="mr-2 font-bold">•</p>
          <p className="text-sm">
            <span className="font-semibold">Equal access</span> for customers at all branches, including remote locations.
          </p>
        </div>

        <div className="mb-1 flex items-start">
          <p className="mr-2 font-bold">•</p>
          <p className="text-sm">
            <span className="font-semibold">Full visibility</span> for authorized staff, enabling quicker decisions.
          </p>
        </div>

      </div>

    ),
    link: "http://coopstream.coopbank.local/LOS",
    file: "",
    moto: "",
    video: "",
    imageUrl: "/products/coop-stream.png",
    type: "",
    vslaPhotos: [
      {
        src: "/vsla/coopstream-1.jpeg",
        alt: "coopstream-1",
      },
      {
        src: "/vsla/coopstream-2.jpeg",
        alt: "coopstream-2",
      },
      {
        src: "/vsla/coopstream-3.jpeg",
        alt: "coopstream-1",
      },
      {
        src: "/vsla/credit-donkey-work.png",
        alt: "coopstream-4",
      },

      // {
      //   src: "/numbers-on-coopay-ebirr.jpg",
      //   alt: "numbers-on-coopay-ebirr",
      // },
    ],
     produtType:"Internal"
  },
  {
    id: 2,
    name: "Deboo Fund",
    description: (
      <div>
        <p className="mb-2">
          Deboo, <strong> a donation and crowdfunding platform</strong> is a
          web-based platform offered by Cooperative Bank of Oromia. It enables
          individuals and organizations to create fundraising campaigns and
          receive contributions from a large number of people to support their
          projects, causes, or initiatives.
        </p>
        <p>
          The Deboo Crowdfunding System supports various types of campaigns,
          including personal projects, creative endeavors, social causes,
          entrepreneurial ventures, community initiatives, and more. You can
          create campaigns to raise funds for a wide range of purposes.
        </p>
      </div>
    ),
    link: "https://debo.coopbankoromiasc.com/",
    file: "Deboo.pptx",
    moto: "",
    video: "",
    imageUrl: "/products/debbo.png",
    type: "",
     produtType:"External"
  },
  {
    id: 3,
    name: "Diaspora Banking",
    description: (
      <div>
        <p className="mb-2">
          Our Diaspora Banking platform allow Diasporas who reside and work
          outside the country to <strong> create CoopBank account</strong> from
          wherever they are.
        </p>
        <p>
          The bank provides Mortgage, Capital and Investment loan along with
          expertise free consultancy services on different opportunities.
        </p>
      </div>
    ),
    link: "https://diasporabanking.coopbankoromiasc.com/",
    file: "",
    moto: "",
    video: "https://www.youtube.com/watch?v=_eW0O2Kbz78",
    imageUrl: "/products/diaspora.png",
    type: "",
     produtType:"External"
  },
  // {
  //   id: 4,
  //   name: "Coop Remit",
  //   description: (
  //     <div>
  //       <p className="mb-2">
  //         Our innovative Coop Remittance app is the first of its kind in
  //         Ethiopia, <strong>leveraging blockchain technology</strong> to enable
  //         fast, secure, and cost-effective money transfers. Here&apos;s what
  //         distinguishes it:
  //       </p>
  //       <ul className="list-disc pl-6 space-y-2">
  //         <li>
  //           <strong>Very small latency:</strong> Transactions are processed
  //           within 3–5 seconds.
  //         </li>
  //         <li>
  //           <strong>Very low transfer limits:</strong> Send amounts as small
  //           as 5 Euros effortlessly.
  //         </li>
  //         <li>
  //           <strong>Extremely low transfer cost:</strong> Transfer cost is
  //           very significantly low compared to other remittance apps locally.
  //         </li>
  //       </ul>
  //     </div>
  //   ),
  //   link: "https://coopremit.coopbankoromiasc.com",
  //   file: "",
  //   moto: "",
  //   video: "https://www.youtube.com/watch?v=AByE7sa6Bmk",
  //   imageUrl: "/products/Coop-remit-new.png",
  //   type: "",
  //    produtType:"External"
  // },
  {
    id: 5,
    name: "VSLA",
    description: (
      <div>
        <p className="mb-2">
          VSLA is a mobile application-based platform developed in collaboration
          with CARE Ethiopia Association to digitize the VSLA concept.
        </p>
        <p>
          {" "}
          <strong> Village Savings and Loans Associations (VSLAs)</strong>{" "}
          empower participants to increase access to and control over resources,
          leveraging collective power to overcome social and financial barriers.
        </p>
      </div>
    ),
    link: "https://vsla.coopbankoromiasc.com",
    file: "1pager VSLA description.pdf",
    moto: "",
    video: "https://www.youtube.com/watch?v=bnZ8jxVdVYQ",
    imageUrl: "/products/VSLA-image.png",
    vslaPhotos: [
      {
        src: "/vsla-stat.jpg",
        alt: "VSLA Stat",
      },
      {
        src: "/vsla/vsla-photo-1.JPG",
        alt: "VSLA-1",
      },
      {
        src: "/vsla/6K2A9645.JPG",
        alt: "VSLA-2",
      },
      {
        src: "/vsla/6K2A9647.JPG",
        alt: "VSLA-3",
      },
    ],
    type: "",
     produtType:"External"
  },
  {
    id: 6,
    name: "Souqpass",
    description: (
      <div>
        <p className="mb-2">
          Souqpass, a fully fledged inventory system powered by the Cooperative
          Bank of Oromia and developed in collaboration with the World Bank to
          pilot <strong> Revenue-Based Financing (RBF) </strong>, is a financial
          platform offering innovative solutions for businesses and MSMEs. It
          primarily serves as an inventory platform that delivers{" "}
          <strong>
            Revenue-Based Financing (RBF), a cash-flow based credit repayment
            method
          </strong>
          , supporting business growth through flexible funding aligned with
          revenue streams.
        </p>
      </div>
    ),
    link: "https://souqpass.coopbankoromiasc.com/",
    file: "Souqpass tanning.pptx",
    // file: "souqpass.pptx",
    moto: "",
    video: "https://www.youtube.com/watch?v=gSOe5oowXcc",
    imageUrl: "/products/souqpass.png",
    type: "",
     produtType:"External"
  },
  {
    id: 7,
    name: "Coop Recon",
    description: (
      <div>
        <p className="mb-2">
          Coop Recon is a powerful tool designed by CoopBank to streamline{" "}
          <strong>reconciliation processes </strong> both within the bank and
          with external banks and systems. It automates the matching of
          transactions, ensuring that all accounts are accurately balanced and
          discrepancies are quickly identified.
        </p>
      </div>
    ),
    link: "http://cooprecon.coopbank.local/",
    file: "",
    moto: "",
    video: "",
    imageUrl: "/products/recon.png",
    type: "",
     produtType:"Internal"
  },
  {
    id: 8,
    name: "CooPayRoll",
    description: (
      <div>
        {/* <p className="mb-2">
          Our payroll system is a powerful <strong>Software as a Service (SaaS)</strong> 
          platform built to automate and simplify payroll for businesses of all sizes.
          With hyper-customizable features and localization support,
           it enables organizations to input employee data once and process payroll with just a few clicks.
        </p>

        <p>
          Supporting <strong>6 languages</strong>,
          it&apos;s built for diverse teams and regional needs,
          making it the ideal solution for modern, growing businesses across Ethiopia and beyond.
        </p> */}
        <p className="mb-2">
          {" "}
          COOPAYROLL is a scalable payroll system that streamlines employee
          management, attendance, and salary processing. It automates tax
          filings, benefits tracking, and compliance, while enabling HR teams to
          manage applications, settings, and reports—supporting six languages
          for diverse teams.
        </p>
      </div>
    ),
    link: "https://coopayroll.coopbankoromiasc.com/en",
    file: "",
    moto: "",
    video: "",
    vslaPhotos: [
      {
        src: "/CooPayRoll-dashboard.jpg",
        alt: "CooPayRoll-dashboard",
      },
      {
        src: "/CooPayRoll-AI-assistant.jpg",
        alt: "CooPayRoll-AI-assistant",
      },
    ],
    imageUrl: "/products/coopayroll.png",
    type: "",
     produtType:"External"
  },
  {
    id: 10,
    name: "Coop Ambition",
    description: (
      // <div>
      //   <p className="mb-2">
      //     Coop Ambition is CoopBank&apos;s dedicated{" "}
      //     <strong>learning and development platform</strong>, designed to
      //     provide employees with access to a wide range of educational
      //     resources. This platform supports continuous learning and professional
      //     development, enabling staff to enhance their skills and knowledge at
      //     their own pace.
      //   </p>
      // </div>
      <div>
        <p className="mb-2">
          Coop Ambition is CoopBank&apos;s{" "}
          <strong>learning and training platform</strong>, introduced during
          staff onboarding to support continuous professional growth. It offers
          35 courses across{" "}
          <strong>
            Business, Software, Digital Marketing, Digital Transformation,
            Capital Market, Project Management, and Leadership
          </strong>
          .
        </p>

        {/* <ul className="list-disc pl-6">
          <li>Business</li>
          <li>Software</li>
          <li>Digital Marketing</li>
          <li>Digital Transformation</li>
          <li>Capital Market</li>
          <li>Project Management</li>
          <li>Leadership</li>
        </ul> */}
      </div>
    ),
    link: "http://learn.coopbankoromiasc.com",
    file: "",
    moto: "",
    video: "",
    vslaPhotos: [
      {
        src: "/CoopAmbition-Certificate.jpg",
        alt: "CoopAmbition-Certificate",
      },
      {
        src: "/coop-ambition-courses-page.jpg",
        alt: "coop-ambition-courses-page",
      },
    ],
    // iframeUrls: ["http://learn.coopbankoromiasc.com"],
    imageUrl: "/products/coopAmbition.jpg",
    type: "",
  },
  {
    id: 30,
    name: "MyCard",
    description: (
      <div>
        <p className="mb-2">
          <strong> Bring Your Brand to Life </strong> — One Card at a Time
          Welcome to the future of custom card ordering. Whether you&apos;re a
          company, a student union, or an organization with a vision, our
          platform empowers you to design and order beautifully personalized
          debit cards that reflect your unique identity.
        </p>
        <p className="mb-2">
          From vibrant logos to elegant minimalist designs, you have full
          creative control. Choose your preferred pickup branch, streamline the
          order process, and deliver a card experience your
          members will remember.
        </p>
      </div>
    ),
    link: "https://mycard.coopbankoromiasc.com/",
    file: "",
    moto: "",
    video: "",
    imageUrl: "/products/mycard-logo.png",
    type: "",
     produtType:"External"
  },
  {
    id: 11,
    name: "Michu",
    description: (
      <div>
        <p className="mb-2">
          <strong>Michu</strong> is CoopBank&apos;s pioneering non-collateral
          digital lending platform—the first in Ethiopia to offer loans without
          requiring collateral.
        </p>
        <p className="mb-2">
          It leverages digital credit scoring to provide fast, secure loans of
          up to <strong>300,000 ETB</strong>, opening doors for individuals
          without traditional assets.
        </p>
        {/* <p>
          Now upgraded to <strong>Michu 2.0</strong>, the platform includes <strong>Michu Kiya</strong>, a women-only lending module, furthering inclusive access to finance across Ethiopia.
        </p> */}
      </div>
    ),
    link: "https://coopbankoromia.com.et/michu",
    file: "",
    moto: "",
    video: "",
    videos: ["/wro. genet michu testimonial.mp4"],
    imageUrl: "/products/MICHU.png",
    type: "",
      vslaPhotos: [
      {
        src: "/michu-comparision-to-other-Digital-lending-providers.png",
        alt: "michu-comparision-to-other-Digital-lending-providers",
      },
     
    ],
    iframeUrls: [ ],
     produtType:"External"
  },
  {
    id: 12,
    name: "Michu Mizan",
    description: (
      <div>
        <p className="mb-2">
          Designed for the Muslim community, MichuMizan offers a convenient and
          accessible way to access{" "}
          <strong className="font-bold">Murabaha financial services.</strong>
        </p>
        <p>
          This app aims to be a Sharia-compliant interest-free collateral-less
          lending platform, addressing the financial needs of the Muslim
          community.
        </p>
      </div>
    ),
    link: "http://dfs.coopbank.local/mizan",
    file: "",
    moto: "",
    video: "",
    imageUrl: "/products/Michu-mizan-logo.png",
    type: "",
    iframeUrls: [],
    produtType:"External"
  },
  {
    id: 50,
    name: "Coopay-Ebirr",
    description: (
      <div>
        <p className="mb-2">
          <p>
            <strong>Coopay-Ebirr</strong> is CoopBank&apos;s digital mobile
            wallet, built in partnership with Ebirr— Ethiopia&apos;s{" "}
            <strong>second-largest mobile money platform</strong>. From airtime
            top-ups and nationwide transfers to payments for{" "}
            <strong>
              fuel, traffic fines, shopping, flights, DSTV, Canal+, utilities,
              and more
            </strong>
          </p>
        </p>
        {/* <a href="#" onClick={() => setActiveTab("imageTab")}> see Stats </a> */}
      </div>
    ),
    link: "http://dfs.coopbank.local/coopay-ebirr",
    // dashboard: "http://dfs.coopbank.local/coopay-ebirr",
    // iframeUrls: [
    //   "http://dfs.coopbank.local/coopay-ebirr",
    // ],
    file: "",
    moto: "",
    // video: "/4-trillion.mp4",
    // videos: ["/4-trillion.mp4"],
    imageUrl: "/products/coopay-logo.png",
    type: "",
    vslaPhotos: [
      {
        src: "/6-trillion-coopay-ebirr.jpg",
        alt: "6-trillion-transaction",
      },
      {
        src: "/image.jpeg",
        alt: "mobile-money-ecosystem-2023/24-shega",
      },
      // {
      //   src: "/numbers-on-coopay-ebirr.jpg",
      //   alt: "numbers-on-coopay-ebirr",
      // },
    ],
    produtType:"External"
  },
  {
    id: 9,
    name: "Equb",
    description: (
      <div>
        <p className="mb-2">
          The Equb app by CoopBank digitizes the traditional Ethiopian practice
          of rotating savings and credit. It allows users to easily join or
          create Equb groups, contributing and receiving funds securely through
          their smartphones.
        </p>
        <p>
          This app modernizes a cultural tradition, making it more accessible
          and convenient. Users can manage their Equb participation seamlessly,
          with notifications and tracking features enhancing the experience.
        </p>
      </div>
    ),
    link: "",
    file: "",
    moto: "",
    video: "https://www.youtube.com/watch?v=DfQFo1y2mqs",
    imageUrl: "/products/equb-image.png",
    type: "",
  },
  {
    id: 15,
    name: "SACCO-Link Core Banking Solution",
    description: (
      <div>
        <p className="mb-2">
          The SACCO-Link Core Banking Solution is also one of the bank&apos;s
          digital banking solutions, providing essential
          <strong>
            {" "}
            core banking services for cooperatives, SACCOs, Unions and
            microfinance institutions.
          </strong>{" "}
        </p>
      </div>
    ),
    link: "https://all-sacco.sybylcloud.com/login",
    file: "Saccolink_Product_Material.pptx",
    moto: "",
    video: "",
    // iframeUrls: ["http://dfs.coopbank.local/saccolink"],
    imageUrl: "/products/sacco-link.png",
    type: "",
    vslaPhotos: [
      {
        src: "/products/sacco-updated-numbers-60.jpeg",
        alt: "sacco-updated-numbers-60",
      },
      {
        src: "/saccopay-mobile-app.jpg",
        alt: "saccopay-mobile-app",
      },
    ],
     produtType:"External"
  },
  {
    id: 16,
    name: "Coop App",
    description: (
      <div>
        <p className="mb-2">
          <strong>Coop App</strong> is CoopBank’s omni-channel platform for
          mobile and web, built for both retail and business users.
        </p>
        <p className="mb-2">
          Retail customers enjoy fast, secure access to transfers, bill
          payments, airtime top-ups, and utilities.
        </p>
        <p>
          Businesses benefit from advanced{" "}
          <strong>authentication and authorization</strong> for multi-user
          access and approval workflows—scalable for any size.
        </p>
      </div>
    ),
    link: "https://coopapp.cbo.com.et/",
    file: "",
    moto: "",
    video: "",
    imageUrl: "/products/coopApp.jpg",
  },

  {
    id: 13,
    name: "Farm pass",
    description: (
      <div>
        <p className="mb-2">
          <strong>FarmPass</strong> is an all-in-one digital marketplace that
          drives efficiency across the ag-chain:
        </p>
        <ul>
          <li>
            <strong>Farmers:</strong> Digital market access, secure payments,
            and activity-based credit.
          </li>
          <li>
            <strong>Co-ops &amp; Aggregators:</strong> Structured collections
            and improved financing.
          </li>
          <li>
            <strong>Buyers:</strong> Traceable transactions and reliable,
            aggregated supply.
          </li>
          <li>
            <strong>Providers:</strong> Direct digital channel to reach and
            manage farmer orders at scale.
          </li>
        </ul>

        {/* <p>
          Farmers do not directly use the platform, they access it through their
          Cooperatives, Unions, or Agro-Dealers they are registered with.
        </p> */}
        {/* <p className="mb-2">
          A loan monitoring tool built in collaboration with RaboBank provides
          clear insights into how the farm is performing.
        </p> */}
      </div>
    ),
    link: "",
    file: "public/slides/FarmPass1.pptx",
    moto: "",
    video: "",
    imageUrl: "/products/Farmpass.jpg",
    vslaPhotos: [
      {
        // src: "/numbers-on-farmpass.jpg",
        src: "/Farmpass-2026-09-04 161401.png",

        alt: "numbers-on-farmpass",
      },
    ],
    //  imageUrl: "/products/Mastercard Community Pass Hi-Res Logo.png",
    type: "",
    // iframeUrls: ["https://agrilm-pilot.agtuall.com/"],
     produtType:"External"
  },
  {
    id: 14,
    name: "Furtuu",
    description: (
      // <div>
      //   <p className="mb-2">
      //     Furtuu, meaning Key in Afaan Oromo, is comprehensive{" "}
      //     <strong>
      //       {" "}
      //       supply chain system designed to onboard all stakeholders in the
      //       farming ecosystem specially in the horticulture sector.{" "}
      //     </strong>{" "}
      //     This innovative solution not only addresses uncollateralized, in-kind
      //     loans for farmers but also provides market privileges for various
      //     MSMEs. It is open to anyone looking to finance farmers with a
      //     feasibility approach through its versatile functionality in one
      //     platform.
      //   </p>
      //   <p>
      //     Input Financing Seed, Fertilizers, and Chemicals Market Linkage
      //     Provide Buyers to Farmer. Advisory Services Better Farming Practices,
      //     New Agricultural Technology Traceability End to End traceability
      //     Opening a Door to export Market
      //   </p>
      // </div>

      // <div>
      //   <p className="mb-2">
      //     {/* Furtuu, meaning Key in Afaan Oromo, is comprehensive{" "} */}

      //     Agri-LMT (<strong>Agricultural Loan Monitoring Tool</strong>)         
      //       {" "}
      //       designed to track the farmers farm performance
      //       built in collaboration with RaboBank.{" "}

      //   </p>
      // </div>
      <div className="text-sm space-y-3">
        <p className="mb-2">
          {/* <strong>Furtuu</strong> is a closed ecosystem agri‑financing solution. It provides input financing through cashless, in‑kind loans bundled with insurance and market linkages, delivered via cooperatives and partner ecosystems. */}
        <strong>Furtuu</strong> is a closed ecosystem agri‑financing solution. It offers input financing through cashless, in‑kind loans bundled with insurance and market linkages, delivered via cooperatives and partner networks. Loans are credit‑scored and monitored with satellite systems, using internal and external datasets, and designed for both conventional and IFB models.

        </p>
        <div className="mb-1 flex items-start gap-2">
          <p className="mr-2 font-bold">•</p>
          <p className="text-sm">
            Cashless, in‑kind loans with insurance 
        </p>
        </div>
        <div className="mb-1 flex items-start gap-2">
          <p className="mr-2 font-bold">•</p>
          <p className="text-sm">
            Delivered through cooperatives and partner ecosystems.
          </p>
        </div>
        <div className="mb-1 flex items-start gap-2">
          <p className="mr-2 font-bold">•</p>
          <p className="text-sm">
            Satellite‑based loan monitoring and credit scoring.
          </p>
        </div>
        <div className="mb-1 flex items-start gap-2">
          <p className="mr-2 font-bold">•</p>
          <p className="text-sm">
            Inclusive design for conventional and IFB models.
          </p>
        </div>
      </div>
    ),

    file: "",
    moto: "",
    video: "",
    videos: ["/furtuu-testimonial-video.mp4"],
    imageUrl: "/products/furtuu-Raboo-Coop.png",
    type: "",
    // dashboard: "http://10.2.125.7:8089/superset/dashboard/84/?native_filters_key=zHklMBPs3FBuxRurICCWrO84YVruzob2-51kiwZ3b9ZSG3p-d321jw8k9mqMtf5v",
    // iframeUrls: ["http://10.2.125.7:8089/superset/dashboard/84/?native_filters_key=zHklMBPs3FBuxRurICCWrO84YVruzob2-51kiwZ3b9ZSG3p-d321jw8k9mqMtf5v"],
    // link: "https://agrilm-pilot.agtuall.com/furtuu/login",
    link:"http://10.8.101.121:3000/",
    produtType:"Internal"
  },

  {
    id: 17,
    name: "Temenos",
    description: (
      <div>
        <p className="mb-2">
          The Cooperative Bank of Oromia uses the Temenos core banking system,
          which includes UniversalSuite and Temenos Infinity. These platforms
          support retail and Islamic banking while enhancing digital services
          like mobile banking, bill payments, and digital lending. The system,
          tailored to Ethiopia&apos;s needs, is key to the bank&apos;s digital
          transformation.
        </p>
      </div>
    ),
    link: "",
    file: "",
    moto: "",
    video: "",
    imageUrl: "/products/logo-temenos-blue-font.jpg",
    type: "corebankingapp",
    //  produtType:"Internal"
  },
  {
    id: 18,
    name: "Cortex",
    description: (
      <div>
        <p className="mb-2">
          Cortex is a leading provider of card management solutions. It&apos;s a
          comprehensive platform that enables financial institutions to issue,
          manage, and process credit, debit, and prepaid cards. It offers a wide
          range of features, including:
        </p>
        <p>
          For the Cooperative Bank of Oromia, which has been advancing its
          digital services with innovations like CRM and partnerships with Visa,
          a platform like Cortext could serve as a significant upgrade to
          streamline and centralize banking operations while aligning with the
          bank&apos;s digital-first strategy​.
        </p>
      </div>
    ),
    link: "",
    file: "",
    moto: "",
    video: "",
    imageUrl: "/products/logo-cortex.jpg",
    type: "corebankingapp",
    // produtType:"Internal"
  },
  {
    id: 19,
    name: "WSO2",
    description: (
      <div>
        <p className="mb-2">
          WSO2 is an open source middleware platform that supports API
          management, integration, and identity management, making it a strong
          candidate for enabling seamless banking operations at Cooperative Bank
          of Oromia. With WSO2, Coopbank can create a robust digital banking
          ecosystem, facilitating secure interactions between core banking
          systems and external applications.
        </p>
      </div>
    ),
    link: "https://developers.coopbankoromiasc.com/",
    file: "",
    moto: "",
    video: "",
    imageUrl: "/products/wso2-vector-logo-2022.png",
    type: "corebankingapp",
    //  produtType:"Internal"
  },
  {
    id: 20,
    name: "SAP - ERP System",
    description: (
      <div>
        <p className="mb-2">
          SAP ERP is a comprehensive software suite that integrates various
          business processes, including finance, HR, supply chain,
          manufacturing, and sales. It offers real-time insights, improved
          efficiency, enhanced collaboration, and scalability, helping
          organizations streamline operations, make informed decisions, and
          adapt to changing business needs. However, implementation can be
          complex and costly, requiring careful planning and expertise.
        </p>
      </div>
    ),
    link: "https://developers.coopbankoromiasc.com/",
    file: "",
    moto: "",
    video: "",
    imageUrl: "/products/OIP.jpeg",
    type: "corebankingapp",
  },
  {
    id: 21,
    name: "Microsoft 365",
    description: (
      <div>
        <p className="mb-2">
          Microsoft 365 is a cloud-based productivity suite that offers a range
          of tools and services, including Word, Excel, PowerPoint, Outlook,
          OneDrive, and Teams. It enables users to create, edit, and collaborate
          on documents, spreadsheets, presentations, and emails from anywhere
          with an internet connection. Additionally, Microsoft 365 provides
          advanced features like intelligent search, real-time collaboration,
          and advanced security measures, making it a powerful tool for both
          personal and professional use.
        </p>
      </div>
    ),
    link: "",
    file: "",
    moto: "",
    video: "",
    imageUrl: "/products/microsoft-365-logo.png",
    type: "corebankingapp",
    // produtType:"Internal"
  },
  {
    id: 22,
    name: "Coop Engage+",
    description: (
      <div>
        <p className="mb-2">
          Coop-Engage+ is first and foremost an internal social platform—an
          engaging, collaborative space where staff across all departments can
          connect, share insights, celebrate achievements, and stay informed
          about the bank’s latest campaigns and initiatives. It fosters a
          culture of openness and teamwork, creating a dynamic environment where
          ideas flow freely and everyone can participate in shaping the bank’s
          journey.
        </p>
        <p>
          In addition to its social and collaborative features, Coop-Engage+
          also includes another major module currently under development: a
          comprehensive CRM and Customer Onboarding system.
        </p>
      </div>
    ),
    link: "http://coopengageplus.coopbank.local/dashboard",
    file: "",
    moto: "",
    video: "",
    imageUrl: "/products/coop-engage.png",
    type: "underDevelopment",
    // produtType:"Internal"
  },

  {
    id: 25,
    name: "Burning OKR",
    description: (
      <div>
        <p className="mb-2">
          Burning OKR is a user-friendly tool designed to help teams set and
          track their goals effectively. It ensures everyone in the organization
          stays focused on what matters most by creating clear objectives and
          measuring progress. The platform supports collaboration and
          transparency, making it easier for everyone to understand and align
          with the company&apos;s goals. You can customize it to fit your
          team&apos;s specific needs and track the progress of your goals
          seamlessly
        </p>
      </div>
    ),
    link: "http://okr.coopbank.local",
    file: "",
    moto: "",
    video: "",
    imageUrl: "/products/burning-okr.jpg",
    type: "underDevelopment",
    // produtType:"Internal"
  },
  {
    id: 26,
    name: "EcoBranch",
    description: (
      <div>
        <p className="mb-2"></p>
      </div>
    ),
    // link: "https://coopbankoromia.com.et/about/eco-branches/",
    link: "https://eco-branches.vercel.app/",
    file: "",
    moto: "Bank Smarter, Live Better",
    video: "",
    imageUrl: "/global-msme-award.jpg",
    type: "dropdownMenu",
  },
  {
    id: 27,
    name: "SmartBranch",
    description: (
      <div>
        <p className="mb-2"></p>
      </div>
    ),
    link: "http://10.185.13.112/DXValley2/SmartBranch/CoopPortal/index.aspx",
    file: "",
    moto: "",
    video: "",
    imageUrl: "",
    type: "dropdownMenu",
  },
  {
    id: 28,
    name: "Coopay-Ebirr",
    description: (
      <div>
        <p className="mb-2"></p>
      </div>
    ),
    link: "http://dfs.coopbank.local/coopay-ebirr",
    file: "",
    moto: "",
    video: "",
    imageUrl: "",
    type: "dropdownMenu",
    // iframeUrls:["http://dfs.coopbank.local/coopay-ebirr"],
    // dashboard: "http://dfs.coopbank.local/coopay-ebirr",

  },
  {
    id: 29,
    name: "CRM",
    description: (
      <div>
        <p className="mb-2"></p>
      </div>
    ),
    link: "http://10.12.51.60:4000/public/dashboard/0fef826d-743a-49af-9bb1-8c2880ec8dfd",
    // dashboard: "http://10.12.51.60:4000/public/dashboard/0fef826d-743a-49af-9bb1-8c2880ec8dfd",
    file: "",
    moto: "",
    video: "",
    imageUrl: "",
    type: "dropdownMenu",
  },
   {
    id: 31,
    name: "Visit Hub",
    description: (
      <div>
        <p className="mb-2"></p>
      </div>
    ),
    link: "https://visithub.vercel.app/",
    file: "",
    moto: "",
    video: "",
    imageUrl: "",
    type: "dropdownMenu",
  },
  {
    id: 30,
    name: "FIS",
    description: (
      <div>
        <p className="mb-2">
          FIS IST/Switch, Fidelity National Information Services delivers a
          cloud-native, scalable, and highly configurable payments processing
          solution tailored for financial institutions navigating a rapidly
          evolving global market. IST/Switch supports nearly all major
          international card schemes and empowers institutions to build,
          customize, and optimize their payments infrastructure with open APIs,
          containerization, and elastic scaling. Designed for agility and
          seamless integration, it helps reduce costs and complexity while
          enabling institutions to innovate faster and meet customer demands
          with secure, high-performance service experiences.
        </p>
      </div>
    ),
    link: "https://www.fisglobal.com/products/payments-processing-ist-switch",
    file: "",
    moto: "",
    video: "",
    imageUrl: "/products/FIS-Logo.png",
    type: "corebankingapp",
    // produtType:"Internal"
  },
  {
    id: 31,
    name: "Entrust",
    description: (
      <div>
        <p className="mb-2">
          Entrust is a global cybersecurity company specializing in identity,
          payments, and data protection solutions for governments, enterprises,
          and financial institutions. With a legacy spanning over 50 years,
          Entrust offers secure credential issuance, digital identity
          verification, PKI infrastructure, and encryption technologies that
          safeguard sensitive transactions and digital assets. Their portfolio
          includes hardware security modules (HSMs), certificate lifecycle
          management, and mobile identity platforms—enabling trusted access,
          compliance, and fraud prevention across physical and digital
          environments.
        </p>
      </div>
    ),
    link: "https://www.entrust.com/",
    file: "",
    moto: "",
    video: "",
    imageUrl: "/products/entrust-logo.png",
    type: "corebankingapp",
  },
  {
    id: 32,
    name: "Global SME Finance Award",
    description: (
      <div>
        <p className="mb-2"></p>
      </div>
    ),
    link: "https://coopbankoromia.com.et/about/eco-branches/",
    file: "",
    moto: "",
    video: "",
    imageUrl: "/products/global-msme award.jpg",
    type: "dropdownMenu",
  },
  {
    id: 33,
    name: "GameHub",
    description: (
      <div>
        <p className="mb-2">
          CoopBank Interactive GameHub for engaging visitor experiences and learning.
        </p>
      </div>
    ),
    link: GAMEHUB_URL,
    file: "",
    moto: "Play, Engage & Experience",
    video: "",
    imageUrl: "",
    type: "dropdownMenu",
  },
  // {
  //   id: 20,
  //   name: "App Connect",
  //   description: (
  //     <div>
  //       <p className='mb-2'>
  //         IBM App Connect is a comprehensive integration platform that helps
  //         businesses connect applications, automate workflows, and streamline
  //         data exchange. For Cooperative Bank of Oromia, adopting IBM App
  //         Connect can support seamless integration between legacy systems,
  //         modern APIs, and third-party services, boosting operational efficiency
  //       </p>

  //     </div>
  //   ),
  //   link: "",
  //   file: "",
  //   moto: "",
  //   video: "",
  //   imageUrl: "/products/IBM-AppConnect.jpeg",
  //   type: "corebankingapp",
];
 
export const DASHBOARD_STATS: DashboardStat[] = [
  { key: "products", label: "Products", target: 24, suffix: "+", icon: <Zap size={12} /> },
  { key: "customers", label: "Customers", target: 20, suffix: "M+", icon: <Users size={12} /> },
  { key: "atms", label: "CRMs & ATMs", target: 900, suffix: "+", icon: <CreditCard size={12} /> },
  { key: "branches", label: "Branches", target: 680, suffix: "+", icon: <Building2 size={12} /> },
];

export const AWARD_CARDS: AwardCard[] = [
  {
    id: "banks",
    src: "/top-100-african-banks.jpeg",
    alt: "Top 100 African Banks",
    width: 1080,
    height: 1350,
  },
  {
    id: "msme",
    src: "/global-msme-award.jpg",
    alt: "Global MSME Award",
    width: 864,
    height: 1080,
  },
];
