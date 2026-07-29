/**
 * EDITING GUIDE
 * Add a publication by copying one object below, assigning a unique `id`, and
 * updating its fields. The Publications page, search, filters, metrics, and
 * homepage highlights all update automatically. The homepage selects the four
 * most recent published SCIE journal articles. Add `url` only for an official
 * DOI or publisher page; entries without one are shown without an external link.
 */

export type PublicationType = "journal" | "conference" | "domestic" | "book";
export type PublicationStatus = "Published" | "Submitted" | "Major revision";
export type PublicationIndex = "SCIE" | "Scopus" | "KCI";

export type Publication = {
  id: string;
  year: number;
  type: PublicationType;
  status: PublicationStatus;
  authors: string;
  title: string;
  venue: string;
  indexes?: PublicationIndex[];
  details?: string;
  url?: string;
  correspondingAuthors?: string[];
};

export const publications: Publication[] = [
  {
    id: "oh-time-window-uav", year: 2026, type: "journal", status: "Submitted",
    authors: "Taegeun Oh",
    title: "Time-Window-Aware Sampling-Based Path Planning for Time-Constrained Unmanned Aerial Vehicle Missions",
    venue: "Journal of Aerospace Information Systems",
    indexes: ["SCIE", "Scopus"],
  },
  {
    id: "jang-xgate-net", year: 2026, type: "journal", status: "Submitted",
    authors: "Sungjun Jang, Minkyoung Kim, Dongjin Jeon, and Taegeun Oh",
    title: "XGate-Net: Gated Cross-Task Interaction for Efficient Multi-Task Perception in Autonomous Driving",
    venue: "Signal, Image and Video Processing",
    indexes: ["SCIE", "Scopus"],
  },
  {
    id: "jang-triv-net", year: 2026, type: "journal", status: "Major revision",
    authors: "Sungjun Jang and Taegeun Oh",
    title: "TriV-Net: Multi-Task Learning Network for Triple Visual Perception using UAV Imagery",
    venue: "Image and Vision Computing",
    indexes: ["SCIE", "Scopus"],
  },
  {
    id: "choi-multi-organ", year: 2026, type: "journal", status: "Published",
    authors: "Jong-ryul Choi, Sungjun Jang, Sung Suk Oh, Ji Yun Lee, Kyujung Kim, and Taegeun Oh",
    title: "A Comparative Analysis of Deep Learning Models for Disease Classification in Multi-organ Histopathological Images",
    venue: "Scientific Reports", details: "June 2026", indexes: ["SCIE", "Scopus"],
    url: "https://doi.org/10.1038/s41598-026-56045-z",
    correspondingAuthors: ["Taegeun Oh"],
  },
  {
    id: "choi-rabbit-brain", year: 2026, type: "journal", status: "Published",
    authors: "Jong-ryul Choi, Minkwon Jeon, Si Won Choi, and Taegeun Oh",
    title: "A Comparative Study on Deep Learning Architectures for Classification of Photothrombotic Damaged Regions in Histopathological Rabbit Brain",
    venue: "Biomedical Signal Processing and Control", details: "Vol. 111, 108354, January 2026", indexes: ["SCIE", "Scopus"],
    url: "https://doi.org/10.1016/j.bspc.2025.108354",
  },
  {
    id: "oh-ta-rrt", year: 2025, type: "journal", status: "Published",
    authors: "Taegeun Oh, Yun-Jae Won, and Sungjin Lee",
    title: "TA-RRT*: Adaptive Sampling Based Path Planning using Terrain Analysis",
    venue: "Applied Sciences", details: "Vol. 15, No. 5, February 2025", indexes: ["SCIE", "Scopus"],
    url: "https://doi.org/10.3390/app15052287",
    correspondingAuthors: ["Sungjin Lee"],
  },
  {
    id: "jung-delivery-robot", year: 2024, type: "conference", status: "Published",
    authors: "Suhyun Jung, Woomin Jun, Taegeun Oh, and Sungjin Lee",
    title: "Performance Analysis of Motion Planning for Outdoor Autonomous Delivery Robot",
    venue: "2024 IEEE International Conference on Consumer Electronics (ICCE)",
    details: "Las Vegas, USA, January 2024", url: "https://doi.org/10.1109/ICCE59016.2024.10444300",
  },
  {
    id: "kwon-anger-gait", year: 2023, type: "domestic", status: "Published",
    authors: "Beom Kwon and Taegeun Oh",
    title: "Multi-Time Window Feature Extraction Technique for Anger Detection in Gait Data",
    venue: "Journal of the Korea Society of Computer and Information", details: "Vol. 28, No. 4, pp. 41–51, April 2023", indexes: ["KCI"],
    url: "https://doi.org/10.9708/jksci.2023.28.04.041",
    correspondingAuthors: ["Taegeun Oh"],
  },
  {
    id: "oh-mobility-path-planning-book", year: 2023, type: "book", status: "Published",
    authors: "Taegeun Oh",
    title: "Understanding and Using of Mobility Path Planning (모빌리티 경로계획의 이해와 활용)",
    venue: "Bookk", details: "ISBN 979-11-410-1364-6, January 2023",
  },
  {
    id: "oh-flight-control-fault", year: 2022, type: "journal", status: "Published",
    authors: "Taegeun Oh and Hyung-sik Yoon",
    title: "A Fault Management Design of Dual-Redundant Flight Control Computer for Unmanned Aerial Vehicle",
    venue: "Journal of the Korean Society for Aeronautical and Space Sciences", details: "Vol. 50, No. 5, pp. 349–357, May 2022", indexes: ["Scopus", "KCI"],
    url: "https://doi.org/10.5139/JKSAS.2022.50.5.349",
  },
  {
    id: "chang-autonomous-mission", year: 2021, type: "journal", status: "Published",
    authors: "Woohyuk Chang, Seungkyu Lee, Yun-Geun Kim, and Taegeun Oh",
    title: "Autonomous Mission Management Software Design and Verification Technique for Unmanned Aerial Vehicles",
    venue: "Journal of the Korean Society for Aeronautical and Space Sciences", details: "Vol. 49, No. 6, pp. 505–513, June 2021", indexes: ["Scopus", "KCI"],
    url: "https://doi.org/10.5139/JKSAS.2021.49.6.505",
  },
  {
    id: "kim-autonomous-awareness", year: 2021, type: "domestic", status: "Published",
    authors: "Yun-Geun Kim, Woohyuk Chang, Kwangmin Kim, and Taegeun Oh",
    title: "Development of an Autonomous Situational Awareness Software for Autonomous Unmanned Aerial Vehicles",
    venue: "Journal of Aerospace System Engineering", details: "Vol. 15, No. 2, pp. 36–44, April 2021", indexes: ["KCI"],
    url: "https://doi.org/10.20910/JASE.2021.15.2.36",
  },
  {
    id: "han-pilot-mental-state", year: 2020, type: "journal", status: "Published",
    authors: "Soo-Yeon Han, No-Sang Kwak, Taegeun Oh, and Seong-Whan Lee",
    title: "Classification of Pilots’ Mental States using a Multimodal Deep Learning Network",
    venue: "Biocybernetics and Biomedical Engineering", details: "Vol. 40, No. 1, pp. 324–336, January 2020", indexes: ["SCIE", "Scopus"],
    url: "https://doi.org/10.1016/j.bbe.2019.12.002",
  },
  {
    id: "kim-uhd-sharpness", year: 2017, type: "journal", status: "Published",
    authors: "Haksub Kim, Jongyoo Kim, Taegeun Oh, and Sanghoon Lee",
    title: "Blind Sharpness Prediction for Ultra-high-definition Video based on Human Visual Resolution",
    venue: "IEEE Transactions on Circuits and Systems for Video Technology", details: "Vol. 27, No. 5, pp. 951–964, May 2017", indexes: ["SCIE", "Scopus"],
    url: "https://doi.org/10.1109/TCSVT.2016.2515303",
  },
  {
    id: "oh-comic-fingerprint", year: 2015, type: "journal", status: "Published",
    authors: "Taegeun Oh, Nakyeon Choi, Doeyoung Kim, and Sanghoon Lee",
    title: "Low-complexity and Robust Comic Fingerprint Method for Comic Identification",
    venue: "Signal Processing: Image Communication", details: "Vol. 39, Part A, pp. 1–16, November 2015", indexes: ["SCIE", "Scopus"],
    url: "https://doi.org/10.1016/j.image.2015.07.009",
  },
  {
    id: "oh-blind-sharpness-motion", year: 2015, type: "journal", status: "Published",
    authors: "Taegeun Oh and Sanghoon Lee",
    title: "Blind Sharpness Prediction Based on Image-Based Motion Blur Analysis",
    venue: "IEEE Transactions on Broadcasting", details: "Vol. 61, No. 1, pp. 1–15, March 2015", indexes: ["SCIE", "Scopus"],
    url: "https://doi.org/10.1109/TBC.2015.2395092",
  },
  {
    id: "oh-camera-shaken", year: 2014, type: "journal", status: "Published",
    authors: "Taegeun Oh, Jincheol Park, Kalpana Seshadrinathan, Sanghoon Lee, and Alan C. Bovik",
    title: "No-reference Sharpness Assessment of Camera-Shaken Images by Analysis of Spectral Structure",
    venue: "IEEE Transactions on Image Processing", details: "Vol. 23, No. 12, pp. 5428–5439, December 2014", indexes: ["SCIE", "Scopus"],
    url: "https://doi.org/10.1109/TIP.2014.2364925",
  },
  {
    id: "oh-video-multicast", year: 2014, type: "journal", status: "Published",
    authors: "Taegeun Oh and Sanghoon Lee",
    title: "Cooperative and Joint Video Multicast over MIMO-OFDM Networks",
    venue: "Digital Signal Processing", details: "Vol. 33, pp. 98–115, October 2014", indexes: ["SCIE", "Scopus"],
    url: "https://doi.org/10.1016/j.dsp.2014.06.015",
  },
  {
    id: "oh-assessing-motion-blur", year: 2014, type: "conference", status: "Published",
    authors: "Taegeun Oh, Jincheol Park, Sanghoon Lee, Kalpana Seshadrinathan, and Alan C. Bovik",
    title: "Assessing Motion Blur without Reference", venue: "VPQM 2014", details: "Chandler, Arizona, USA, January 2014",
  },
  {
    id: "kang-comic-identification", year: 2014, type: "conference", status: "Published",
    authors: "Jiwoo Kang, Taegeun Oh, Nakyeon Choi, Sang-Hoon Lee, Sanghoon Lee, and Hogab Kang",
    title: "Network-based Content Identification System via Content-based Comics Fingerprint", venue: "ICOIN 2014", details: "Phuket, Thailand, February 2014",
    url: "https://doi.org/10.1109/ICOIN.2014.6799705",
  },
  {
    id: "kim-copyright-comics", year: 2014, type: "conference", status: "Published",
    authors: "Seonghyun Kim, Sang-Hoon Lee, Taegeun Oh, Nakyeon Choi, Justin Daegull Ryu, Hogab Kang, and Sanghoon Lee",
    title: "Copyright Protection and Distribution System for Scanned Books/Comics", venue: "ICOIN 2014", details: "Phuket, Thailand, February 2014",
    url: "https://doi.org/10.1109/ICOIN.2014.6799703",
  },
  {
    id: "lee-visual-sensor-network", year: 2014, type: "domestic", status: "Published",
    authors: "Inwoong Lee, Haksup Kim, Taegeun Oh, and Sanghoon Lee",
    title: "Study on Low Delay and Adaptive Video Transmission for a Surveillance System in Visual Sensor Networks",
    venue: "Journal of the Korean Institute of Communications and Information Sciences", details: "Vol. 39, No. 5, pp. 435–446, May 2014", indexes: ["KCI"],
    url: "https://doi.org/10.7840/kics.2014.39C.5.435",
  },
  {
    id: "oh-dynamic-bandwidth", year: 2013, type: "journal", status: "Published",
    authors: "Taegeun Oh, Hyungkeuk Lee, and Sanghoon Lee",
    title: "Dynamic Bandwidth and Carrier Allocation for Video Broadcast/Multicast over Multi-cell Environments",
    venue: "Wireless Personal Communications", details: "Vol. 69, No. 4, pp. 1925–1945, April 2013", indexes: ["SCIE", "Scopus"],
    url: "https://doi.org/10.1007/s11277-012-0671-x",
  },
  {
    id: "lee-device-aware", year: 2013, type: "journal", status: "Published",
    authors: "Inwoong Lee, Jincheol Park, Seonghyun Kim, Taegeun Oh, and Sanghoon Lee",
    title: "Device-aware Visual Quality Adaptation for Wireless N-screen Multicast Systems",
    venue: "IEICE Transactions on Communications", details: "Vol. E96-B, No. 12, pp. 3181–3189, December 2013", indexes: ["SCIE", "Scopus"],
    url: "https://doi.org/10.1587/transcom.E96.B.3181",
  },
  {
    id: "kim-stereoscopic-discomfort", year: 2013, type: "conference", status: "Published",
    authors: "Jongyoo Kim, Kwanghyun Lee, Taegeun Oh, and Sanghoon Lee",
    title: "Ego Motion Induced Visual Discomfort of Stereoscopic Video", venue: "APSIPA ASC 2013", details: "Kaohsiung, Taiwan, October–November 2013",
    url: "https://doi.org/10.1109/APSIPA.2013.6694321",
  },
  {
    id: "oh-block-truncation", year: 2012, type: "journal", status: "Published",
    authors: "Taegeun Oh and Sanghoon Lee",
    title: "Implementation of Multimode-Multilevel Block Truncation Coding for LCD Overdrive",
    venue: "IEICE Transactions on Fundamentals of Electronics, Communications and Computer Sciences", details: "Vol. E95-A, No. 5, pp. 867–875, May 2012", indexes: ["SCIE", "Scopus"],
    url: "https://doi.org/10.1587/transfun.E95.A.867",
  },
  {
    id: "oh-throughput-qos", year: 2009, type: "journal", status: "Published",
    authors: "Taegeun Oh, Sanghoon Lee, and Gye-Tae Gil",
    title: "Increasing Throughput and QoS using Bandwidth and Region Division with Frequency Overlay over Multicell Environments",
    venue: "IEICE Transactions on Communications", details: "Vol. E92-B, No. 1, pp. 85–92, January 2009", indexes: ["SCIE", "Scopus"],
    url: "https://doi.org/10.1587/transcom.E92.B.85",
  },
  {
    id: "ha-macroblock-weighting", year: 2009, type: "journal", status: "Published",
    authors: "Hojin Ha, Taegeun Oh, and Sanghoon Lee",
    title: "Macroblock-based Frequency Selective Weighting for Visual Scalable Video Coding of H.264/AVC",
    venue: "IEEE Transactions on Broadcasting", details: "Vol. 55, No. 3, pp. 559–568, September 2009", indexes: ["SCIE", "Scopus"],
    url: "https://doi.org/10.1109/TBC.2009.2027624",
  },
  {
    id: "park-power-allocation", year: 2009, type: "conference", status: "Published",
    authors: "Jincheol Park, Uk Jang, Taegeun Oh, Sanghoon Lee, and Alan C. Bovik",
    title: "Optimal Power Allocation for Minimizing Visual Distortion over MIMO Communication Systems", venue: "IEEE ICIP 2009", details: "Cairo, Egypt, November 2009",
    url: "https://doi.org/10.1109/ICIP.2009.5413576",
  },
  {
    id: "oh-link-capacity", year: 2008, type: "conference", status: "Published",
    authors: "Taegeun Oh, Sanghoon Lee, and Gye-Tae Gil",
    title: "Link Capacity Improvement by Utilizing Overlaid Bandwidth and Region Division", venue: "IEEE VTC2008-Spring", details: "Singapore, May 2008",
    url: "https://doi.org/10.1109/VETECS.2008.587",
  },
];

export const publishedPublications = publications.filter(
  (publication) => publication.status === "Published",
);

export const publishedPublicationCounts = {
  journals: publishedPublications.filter(
    (publication) => publication.type === "journal",
  ).length,
  conferences: publishedPublications.filter(
    (publication) => publication.type === "conference",
  ).length,
};

export const latestPublishedScieJournals = publishedPublications
  .filter(
    (publication) =>
      publication.type === "journal" && publication.indexes?.includes("SCIE"),
  )
  .sort((a, b) => b.year - a.year)
  .slice(0, 4);

export const publicationTypeLabels: Record<PublicationType, string> = {
  journal: "International journal",
  conference: "International conference",
  domestic: "Domestic journal",
  book: "Book",
};
