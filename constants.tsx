/** @format */

import { Product } from "./types";

export const products: Product[] = [
  {
    id: 1,
    name: "Coop Stream",
    description: (
      <div>
        <p className="mb-2">
          Coop Stream is CoopBank&apos;s innovative <strong>loan origination platform</strong>that
          automates the entire loan processing workflow. This app simplifies and
          accelerates the process of applying for and approving loans, reducing
          manual tasks and enhancing efficiency.
        </p>
        <p>
          By streamlining loan origination, Coop Stream allows both customers
          and bank staff to manage loan applications with ease. The app ensures
          quicker decision-making, improves accuracy, and delivers a seamless
          experience from application to approval, reflecting CoopBank&apos;s
          commitment to leveraging technology for better financial services.
        </p>
      </div>
    ),
    link: "http://coopstream.coopbank.local/LOS",
    file: "",
    moto: "",
    video: "",
    imageUrl: "/products/coop-stream.png",
    type: "",
  },
  {
    id: 2,
    name: "Deboo",
    description: (
      <div>
        <p className="mb-2">
          Deboo, <strong> a donation and crowdfunding platform</strong> is a web-based platform offered by
          Cooperative Bank of Oromia. It enables individuals and organizations
          to create fundraising campaigns and receive contributions from a large
          number of people to support their projects, causes, or initiatives.
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
  },
  {
    id: 3,
    name: "Diaspora Banking",
    description: (
      <div>
        <p className="mb-2">
          Our Diaspora Banking platform allow Diasporas who reside and work
          outside the country to <strong> create CoopBank account</strong>from wherever they are.
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
  },
  {
    id: 4,
    name: "Coop Remit",
    description: (
      <div>
        <p className="mb-2">
          Our innovative Coop Remittance app is the first of its kind in
          Ethiopia, <strong>leveraging blockchain technology</strong> to enable
          fast, secure, and cost-effective money transfers. Here&apos;s what
          distinguishes it:
          <li>
            <strong> Very small latency: </strong>
            Transactions are processed within 3–5 seconds.
          </li>
          <li>
            <strong> Very Low transfer limits: </strong>
            Send amounts as small as 5 Euros effortlessly.
          </li>
          <li>
            <strong> Extremely low transfer cost: </strong>
            Transfer cost is very significantly low compared to other remittance
            apps locally.
          </li>
        </p>
      </div>
    ),
    link: "https://coopremit.coopbankoromiasc.com",
    file: "",
    moto: "",
    video: "https://www.youtube.com/watch?v=AByE7sa6Bmk",
    imageUrl: "/products/Coop-remit-new.png",
    type: "",
  },
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
         <strong>  Village Savings and Loans Associations (VSLAs)</strong> empower participants to
          increase access to and control over resources, leveraging collective
          power to overcome social and financial barriers.
        </p>
      </div>
    ),
    link: "https://vsla.coopbankoromiasc.com",
    file: "",
    moto: "",
    video: "https://www.youtube.com/watch?v=bnZ8jxVdVYQ",
    imageUrl: "/products/VSLA-image.png",
    vslaPhotos: [
      {
        src: "/vsla/vsla-photo-1.JPG",
        alt: "VSLA-1",
      },
      {
        src: "/vsla/vsla-photo-2.JPG",
        alt: "VSLA-2",
      },
      {
        src: "/vsla/vsla-photo-3.JPG",
        alt: "VSLA-3",
      },
    ],
    type: "",
  },

  {
    id: 6,
    name: "Souqpass",
    description: (
      <div>
        <p className="mb-2">
          Souqpass, a fully fledged inventory system powered by the Cooperative
          Bank of Oromia and developed in collaboration with the World Bank to
          pilot <strong>Revenue-Based Financing (RBF)</strong>, is a financial platform offering
          innovative solutions for businesses and MSMEs. It primarily serves as
          an inventory platform that delivers{" "}
          <strong>Revenue-Based Financing (RBF), a cash-flow based credit repayment method</strong>, supporting business
          growth through flexible funding aligned with revenue streams.
        </p>

        <p className="mb-2">
          Beyond financing, Souqpass serves as a secure and efficient payment
          gateway for individuals and startups, enabling seamless fintech and
          e-commerce integration with well-structured documentation.
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
  },
  {
    id: 7,
    name: "Coop Recon",
    description: (
      <div>
        <p className="mb-2">
          Coop Recon is a powerful tool designed by CoopBank to streamline
          <strong>reconciliation processes </strong>both within the bank and with external banks
          and systems. It automates the matching of transactions, ensuring that
          all accounts are accurately balanced and discrepancies are quickly
          identified.
        </p>
        <p>
          By integrating with various systems, Coop Recon simplifies the complex
          process of reconciliation, reducing manual errors and improving
          efficiency. This product enhances the bank&apos;s ability to maintain
          financial accuracy and fosters smoother interactions with external
          banking partners.
        </p>
      </div>
    ),
    link: "http://cooprecon.coopbank.local/",
    file: "",
    moto: "",
    video: "",
    imageUrl: "/products/recon.png",
    type: "",
  },
  {
    id: 8,
    name: "CooPayRoll",
    description: (
      <div>
        <p className="mb-2">
          Our payroll system is a cutting-edge{" "}
          <strong> Software as a Service (SaaS) </strong>
          solution designed to automate and simplify payroll processes for
          businesses of all sizes. With its hyper-customizable and localization
          features, the system allows organizations to input employee data once
          and process payroll with just a few clicks, drastically reducing time
          spent on repetitive tasks. It offers a flexible and scalable platform
          that adapts to both small and large enterprises, ensuring accuracy,
          compliance, and efficiency. Whether handling basic payroll tasks or
          complex pay structures, our system empowers businesses to streamline
          operations, cut costs, and focus on growth.
        </p>
      </div>
    ),
    link: "https://coopayroll.coopbankoromiasc.com/en",
    file: "",
    moto: "",
    video: "",
    imageUrl: "/products/coopayroll.png",
    type: "",
  },
  {
    id: 10,
    name: "Coop Ambition",
    description: (
      <div>
        <p className="mb-2">
          Coop Ambition is CoopBank&apos;s dedicated <strong>learning and development platform</strong>,
          designed to provide employees with access to a wide range of
          educational resources. This platform supports continuous learning and
          professional development, enabling staff to enhance their skills and
          knowledge at their own pace.
        </p>
        <p>
          Through Coop Ambition, employees can engage with interactive courses,
          training modules, and other educational content tailored to their
          roles within the bank. This initiative underscores CoopBank&apos;s
          commitment to fostering a culture of growth and excellence, ensuring
          that its workforce remains equipped to meet the evolving demands of
          the banking industry.
        </p>
      </div>
    ),
    link: "http://learn.coopbankoromiasc.com",
    file: "",
    moto: "",
    video: "",
    imageUrl: "/products/coopAmbition.jpg",
    type: "",
  },

  {
    id: 11,
    name: "Michu",
    description: (
      <div>
        <p className="mb-2">
          Michu is CoopBank&apos;s groundbreaking and pioneering{" "}
          <strong> on-collateral digital lending platform</strong>, the first in
          Ethiopia to offer loans without requiring collateral.
        </p>
        <p className="mb-2">
          As a non-collateral lending platform, Michu leverages digital
          technology to assess credit worthiness and disburse loans swiftly. It
          opens up new opportunities for those who may not have traditional
          assets, empowering more people across Ethiopia to access credit and
          support their financial goals.
        </p>
        {"  "}
        <p>
          Recognizing its impacts and growing demands, Michu was upgraded to
          Michu 2.0, incorporating new segments such as{" "}
          <strong> Michu Kiya</strong>, a women-only lending module.
        </p>
      </div>
    ),
    link: "https://coopbankoromiasc.com.et/michu",
    file: "",
    moto: "",
    video: "",
    imageUrl: "/products/MICHU.png",
    type: "",
  },
  {
    id: 11,
    name: "Coopay-Ebirr",
    description: (
      <div>
        <p className="mb-2">
          Coopay-Ebirr is coop bank&apos;s{" "}
          <strong>digital mobile wallet</strong> provided in partnership with
          Ebirr, a fintech company in Ethiopia. Whether you need to pay for your
          mobile airtime, send money to all corners of the country, or make use
          of the bank&apos;s vast branch and agent networks, Coopay-Ebirr has
          got you covered. This platform also lets you make payments for a range
          of services, including{" "}
          <strong>
            {" "}
            fuel ups, traffic fines, shopping, flight booking, DSTV, Canal+,
            water and electricity bills, telephone and other bills{" "}
          </strong>
          , making it the ultimate all-in-one solution for your digital banking
          needs.
        </p>
      </div>
    ),
    link: "https://coopbankoromia.com.et/coopay-ebirr/",
    file: "",
    moto: "",
    video: "",
    imageUrl: "/products/coopay-logo.png",
    type: "",
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
    name: "SACCO-Link Core Banking Solutions",
    description: (
      <div>
        <p className="mb-2">
          The SACCO-Link Core Banking Solutions is also one of the bank&apos;s
          digital banking solutions, providing essential
          <strong>
            {" "}
            core banking services for cooperatives, SACCOs, and microfinance
            institutions.
          </strong>{" "}
          This product upholds the bank&apos;s position in the Ethiopian banking
          industry as a leader in digital, innovative, and cutting-edge banking
          solutions for the community.
        </p>
        <p>
          As a financial institution deeply rooted in the community, Coopbank is
          dedicated to serving all segments of society, with a special focus on
          cooperatives that own 61.25% of the bank&apos;s shares.
        </p>
      </div>
    ),
    link: "https://coopbankoromia.com.et/coopbank-sacco-link/",
    file: "",
    moto: "",
    video: "",
    imageUrl: "/products/sacco-link.png",
    type: "",
  },
  {
    id: 16,
    name: "Coop App",
    description: (
      <div>
        <p className="mb-2">
          The Coop Bank&apos;s <strong>dedicated Mobile Banking Application</strong> for CoopBank
          offers customers a convenient way to manage their finances on the go.
          With features like account management, fund transfers, and bill
          payments, users can handle their banking needs directly from their
          smartphones.
        </p>
        <p>
          Coop App Omni-Channel platform, represents a leap forward in
          technology, seamlessly integrating across web portals and mobile
          applications. With tailored solutions designed for businesses and
          individual retail customers, this innovation ensures enhanced
          accessibility, convenience, and security in managing Conventional
          banking financial solutions.
        </p>
      </div>
    ),
    link: "https://coopbankoromia.com.et/coopapp/",
    file: "",
    moto: "",
    video: "",
    imageUrl: "/products/coopApp.jpg",
  },
  {
    id: 13,
    name: "Furtuu",
    description: (
      <div>
        <p className="mb-2">
          Furtuu, meaning Key in Afaan Oromo, is comprehensive{" "}
          <strong>
            {" "}
            supply chain system designed to onboard all stakeholders in the
            farming ecosystem specially in the horticulture sector.{" "}
          </strong>
          This innovative solution not only addresses uncollateralized, in-kind
          loans for farmers but also provides market privileges for various
          MSMEs. It is open to anyone looking to finance farmers with a
          feasibility approach through its versatile functionality in one
          platform.
        </p>
        <p>
          Input Financing Seed, Fertilizers, and Chemicals Market Linkage
          Provide Buyers to Farmer. Advisory Services Better Farming Practices,
          New Agricultural Technology Traceability End to End traceability
          Opening a Door to export Market
        </p>
      </div>
    ),
    link: "",
    file: "furtuu.pptx",
    moto: "",
    video: "",
    imageUrl: "/products/Furtuu.png",
    type: "",
  },

  {
    id: 14,
    name: "Farm pass",
    description: (
      <div>
        <p className="mb-2">
          Coopbank Farm pass powered by Mastercard&apos;s renowned Community
          Pass platform, it is a supply chain Eco-system that seamlessly
          connects farmers, cooperatives, aggregators, buyers, agricultural
          input/service providers, financial institutions, and other service
          providers. Language support in : Afaan Oromo Amharic and English *
          Farmers do not directly use the platform, they access it through their
          Cooperative, Cooperative Agents or any other organization they are
          under.
        </p>
      </div>
    ),
    link: "",
    file: "FarmPass.pptx",
    moto: "",
    video: "",
    imageUrl: "/products/Farmpass.jpg",
    //  imageUrl: "/products/Mastercard Community Pass Hi-Res Logo.png",
    type: "",
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
  },
  {
    id: 22,
    name: "Coop Engage+",
    description: (
      <div>
        <p className="mb-2">
          Coop-Engage+ serves as both an onboarding and engagement platform,
          managing the entire customer engagement process from onboarding new
          customers to handling high-profile customer interactions.
        </p>
        <p>
          <strong>Admin Portal</strong>
          To checkout all the information that is happening on the branch, track
          progress and follow up with customers.
        </p>
      </div>
    ),
    link: "http://coopengageplus.coopbank.local/dashboard",
    file: "",
    moto: "",
    video: "",
    imageUrl: "/products/coop-engage.png",
    type: "underDevelopment",
  },
  {
    id: 23,
    name: "Michu Mizan",
    description: (
      <div>
        <p className="mb-2">
          Designed for the Muslim community, MichuMizan offers a convenient and
          accessible way to access financial services. As part of
          Coopbank&apos;s commitment to financial inclusion, Michu empowers
          individuals and businesses to achieve their goals while adhering to
          Islamic principles.
        </p>
        <p>
          This app aims to be a Sharia-compliant interest-free collateral-less
          lending platform, addressing the financial needs of the Muslim
          community.
        </p>
      </div>
    ),
    link: "http://michumizan.com",
    file: "",
    moto: "",
    video: "",
    imageUrl: "/products/Michu-mizan-logo.png",
    type: "underDevelopment",
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
  },
  {
    id: 26,
    name: "EcoBranch",
    description: (
      <div>
        <p className="mb-2"></p>
      </div>
    ),
    link: "https://coopbankoromia.com.et/about/eco-branches/",
    file: "",
    moto: "",
    video: "",
    imageUrl: "",
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
    name: "Ebirr",
    description: (
      <div>
        <p className="mb-2"></p>
      </div>
    ),
    link: "http://10.8.100.90:7070/dashboard",
    file: "",
    moto: "",
    video: "",
    imageUrl: "",
    type: "dropdownMenu",
  },
  {
    id: 29,
    name: "CRM",
    description: (
      <div>
        <p className="mb-2"></p>
      </div>
    ),
    link: "http://10.12.51.60:3009",
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
  // },
];
