import React from "react";

const scheduleItems = [
  // Inauguration & Keynote
  {
    time: "12:00–12:30 PM",
    title: "Inauguration (Honorary Chair)",
    author: "Prof. T. N. Singh, Director, IIT Patna",
  },
  {
    time: "12:30–1:00 PM",
    title: "Keynote: LLM and Data Science",
    author:
      "Dr. Animesh Prasad (Ph.D., NUS Singapore), Natural Language Research @ Synthesia",
  },

  // Technical Session – Papers
  {
    time: "1:00–1:15 PM",
    title:
      "S14201: Benchmarking Artificial Intelligence Models for Daily Coastal Hypoxia Forecasting",
    author: "-",
  },
  {
    time: "1:15–1:30 PM",
    title:
      "S14204: Quantum-Driven Logistics: Building Sustainable and Efficient Supply Chain",
    author: "-",
  },
  {
    time: "1:30–1:45 PM",
    title:
      "S14208: Machine Learning for Predicting Clinical Outcomes of Metformin Dosage on Patient Health",
    author: "-",
  },
  {
    time: "1:45–2:00 PM",
    title:
      "S14210: HiResGAN-Climate: Conditional Physics-Aware Generative Adversarial Networks for High-Resolution Climate Scenario Generation and Downscaling",
    author: "-",
  },
  {
    time: "2:00–2:15 PM",
    title:
      "S14214: A Comparative Analysis of State-of-the-Art Text-to-3D Generation Models: Evaluation Framework and Performance Benchmarking",
    author: "-",
  },
  {
    time: "2:15–2:30 PM",
    title:
      "S14218: Minimizing Inequality in Urban Water: ST-GNN Forecasting and Differentiable Optimization",
    author: "-",
  },
  {
    time: "2:30–2:45 PM",
    title:
      "S14221: Neuro-Symbolic Ensemble Architecture (NSEA) for Adaptive Workload Prediction in Containerized Cloud Environments",
    author: "-",
  },
  {
    time: "2:45–3:00 PM",
    title:
      "S14222: CEC-DuelNet: Relational Deep Reinforcement Learning for Coded Edge Computing Offloading",
    author: "-",
  },
  {
    time: "3:00–3:15 PM",
    title:
      "S14223: Predicting Cloud Workload Job Arrival Rates Using a Diffusion Autoformer Model",
    author: "-",
  },

  // Tea Break
  {
    time: "3:15–3:30 PM",
    title: "Tea Break",
    author: "",
  },

  // After Tea Break
  {
    time: "3:30–3:45 PM",
    title: "S14224: Post-Quantum Secure Peer-to-Peer VPN Protocol",
    author: "-",
  },
  {
    time: "3:45–4:00 PM",
    title:
      "S14225: Optimizing Service Allocation in Mobile Edge Computing with Genetic Algorithm",
    author: "-",
  },
  {
    time: "4:00–4:15 PM",
    title:
      "S14226: Comprehensive Survey of Big Data Analytics with Generative AI for Climate Change",
    author: "-",
  },
  {
    time: "4:15–4:30 PM",
    title:
      "S14227: Insight Lens: Multi-View Summarization via Retrieval-Augmented Generation for Hallucination Reduction",
    author: "-",
  },
  {
    time: "4:30–4:45 PM",
    title:
      "BigD669: Optimizing Power–Accuracy Tradeoff in Air Pollution Forecasting for Edge-Based Quantized Models",
    author: "-",
  },
  {
    time: "4:45–5:00 PM",
    title:
      "BigD718: FedEnergy: Federated Learning for Energy Consumption Forecasting on Smart Meters using Hybrid TCN–Transformer Model",
    author: "-",
  },
  {
    time: "5:00–5:15 PM",
    title:
      "S14228: Skin Cancer Detection and Classification using Swin Transformer and YOLOv8",
    author: "-",
  },
  {
    time: "5:15–5:30 PM",
    title:
      "S14229: Efficient Resource Allocation Prediction for B5G Network Slicing using Attention-based LSTM-DDPG",
    author: "-",
  },
];

const ProgramSchedule = () => {
  return (
    <div className="max-w-6xl mx-auto p-6 text-gray-800 space-y-8 mt-20">
      {/* Header */}
      <section className="text-center space-y-2">
        <h1 className="text-3xl font-bold text-blue-700">
          3rd International Workshop on Big Data Analytics with Generative AI
          for Climate Change
        </h1>

        <p className="text-sm text-gray-700">
          In conjunction with{" "}
          <span className="font-semibold">
            The 13th IEEE International Conference on Big Data (IEEE Big Data
            2025)
          </span>
        </p>

        <p className="text-sm text-gray-700">
          <span className="font-semibold">Venue:</span> Macau SAR, China &nbsp;|
          &nbsp; Organized by Indian Institute of Technology Patna, India
        </p>

        <p className="mt-1">
          <strong>Date:</strong> 09 December 2025 &nbsp;|&nbsp;
          <strong>Time:</strong> 12:00 PM (India) / 2:30 PM (China)
        </p>

        <p className="mt-1 text-gray-700">
          <strong>Honorary Chair:</strong> Prof. T. N. Singh, Director, IIT
          Patna
        </p>

        <p className="text-gray-700">
          <strong>Organizing Chair:</strong> Prof. Rajiv Misra, IIT Patna
        </p>

        <p className="text-gray-700">
          <strong>Co-Chair:</strong> Prof. Supratik Mukhopadhyay, Louisiana
          State University, USA
        </p>

        <p className="text-gray-700">
          <strong>Technical Session Chair:</strong> Dr. Ram Narayan Yadav,
          Assistant Professor, Electrical and Computer Science Engineering,
          Institute of Infrastructure, Technology, Research and Management,
          Government of Gujarat
        </p>

        <p className="mt-2">
          <strong>Meeting Link:</strong>{" "}
          <a
            href="https://teams.microsoft.com/light-meetings/launch?context=%257B%2522Tid%2522:%2522a57f7d92-038e-4d4c-8265-7cd2beb33b34%2522,%2522Oid%2522:%25227e8b17c8-9baf-480f-9659-bcac8f5a324b%2522%257D&anon=true&lightExperience=true&correlationId=915207db-b4ae-44f5-be87-e0831682055b&agent=web&version=25110306401&coords=eyJjb252ZXJzYXRpb25JZCI6IjE5Om1lZXRpbmdfTURReFl6QXhPR1F0WlRBMVl5MDBZekV3TFdFeE9EQXRaV1F6TnpRMU16YzVZekprQHRocmVhZC52MiIsInRlbmFudElkIjoiYTU3ZjdkOTItMDM4ZS00ZDRjLTgyNjUtN2NkMmJlYjMzYjM0Iiwib3JnYW5pemVySWQiOiI3ZThiMTdjOC05YmFmLTQ4MGYtOTY1OS1iY2FjOGY1YTMyNGIiLCJtZXNzYWdlSWQiOiIwIn0=&deeplinkId=a49b9520-28dd-4067-8d64-b765576794e2"
            className="text-blue-600 underline hover:text-blue-800 break-all"
            target="_blank"
            rel="noreferrer"
          >
            Join Here
          </a>
        </p>

        <p className="text-xs text-gray-500 mt-1">
          All technical sessions will use the same meeting link.
        </p>
      </section>

      {/* Schedule Table */}
      <section>
        <h2 className="text-2xl font-bold text-green-700 border-b pb-2 mb-4">
          📅 Technical Program Schedule (09 December 2025)
        </h2>
        <p className="text-sm text-gray-600 mb-3">
          Timing reference: 12:00–17:30 (India) / 14:30–20:00 (China, UTC +8:00)
        </p>

        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-300 text-sm text-left">
            <thead className="bg-gray-100 text-gray-700">
              <tr>
                <th className="border px-4 py-2 w-40">Time</th>
                <th className="border px-4 py-2">Title</th>
                <th className="border px-4 py-2">Presenter / Author</th>
              </tr>
            </thead>
            <tbody>
              {scheduleItems.map((item, idx) => (
                <tr key={idx} className="hover:bg-gray-50">
                  <td className="border px-4 py-2">{item.time}</td>
                  <td className="border px-4 py-2">{item.title}</td>
                  <td className="border px-4 py-2">
                    {item.author && item.author.trim() !== ""
                      ? item.author
                      : "-"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};

export default ProgramSchedule;
