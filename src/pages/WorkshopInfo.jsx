import React from 'react';

const WorkshopInfo = () => {
  return (
    <div className="max-w-6xl mx-auto p-6 space-y-10 text-gray-800">
      {/* Call for Paper Section */}
      <section id="callforpaper" className="bg-white py-12 px-6 md:px-16 lg:px-32">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 border-b-4 border-blue-600 inline-block pb-1">
          Call For Paper
        </h2>
        <div className="text-gray-700 space-y-4 leading-relaxed text-justify">
          <p>
            Climate change remains one of the most critical challenges of our era, with profound consequences for ecosystems,
            economies, and societies worldwide. Scientific evidence overwhelmingly attributes climate change to human activities,
            including fossil fuel combustion, deforestation, and industrial processes that release greenhouse gases. These emissions
            intensify the greenhouse effect, leading to rising global temperatures and cascading environmental disruptions.
          </p>
          <p>
            Addressing these multifaceted challenges demands innovative solutions that leverage vast datasets and harness the
            transformative power of Generative Artificial Intelligence (AI) to model, predict, and mitigate climate impacts.
            The integration of big data analytics with Generative AI offers unparalleled opportunities to enhance climate science,
            improve predictive accuracy, and develop adaptive strategies for resilience and sustainability.
          </p>
          <p>
            The <strong>3rd International Workshop on Big Data Analytics with Generative AI for Climate Change</strong> will convene
            researchers, policymakers, industry leaders, and practitioners to explore the cutting-edge applications of Generative AI
            and big data in climate science, policy, and action. Through keynote speeches, paper presentations, panel discussions,
            and interactive workshops, participants will engage with the latest advancements in:
          </p>
          <ul className="list-disc list-inside ml-4">
            <li>Generative AI-driven climate modeling and simulation</li>
            <li>Predictive analytics for extreme weather forecasting</li>
            <li>AI-powered carbon emission tracking and mitigation strategies</li>
            <li>Automated climate risk assessment and decision support systems</li>
            <li>Generative AI for sustainable urban planning and smart infrastructure</li>
          </ul>
          <p>
            This workshop will serve as a collaborative hub for academia, industry, government, and NGOs to bridge research and
            real-world implementation, fostering innovations that drive climate resilience, policy effectiveness, and sustainable
            development.
          </p>
          <p>
            The workshop will provide a platform for fostering partnerships and collaborations among academia, industry, government
            agencies, and non-governmental organizations (NGOs). By fostering a collaborative ecosystem, we aim to accelerate the
            translation of research findings into real-world applications and policies that contribute to building climate-resilient
            communities and promoting sustainable development.
          </p>
          <p>
            As a result, the workshop's theme is to invite various national and international academia, research professionals,
            Industry, and government entities to present their quality research work.
          </p>

          <h3 className="text-2xl font-semibold text-blue-600 mt-8">Topics of Interest</h3>
          <ol className="list-decimal list-inside ml-4 space-y-1">
            <li>The role of Generative AI in climate change research</li>
            <li>Advanced methods for climate data collection and AI-driven analysis</li>
            <li>Generative adversarial networks (GANs) for climate scenario generation</li>
            <li>AI-enhanced climate modeling and simulation accuracy</li>
            <li>Predicting extreme weather events using Generative AI</li>
            <li>Evaluating climate policies with AI-powered big data analytics</li>
            <li>Satellite and remote sensing data analysis with deep learning</li>
            <li>Generative AI for real-time carbon footprint monitoring</li>
            <li>AI-driven adaptive strategies for climate resilience</li>
            <li>Leveraging social media and NLP for climate awareness</li>
            <li>Case studies on AI and big data applications in climate action</li>
            <li>Future trends in AI-augmented climate science</li>
            <li>Generative AI for disaster risk reduction and early warning systems</li>
            <li>Smart infrastructure planning with AI-based climate projections</li>
            <li>Machine learning for climate-smart agriculture</li>
            <li>AI in sustainable urban development and transportation</li>
            <li>Generative models for ecosystem service preservation</li>
            <li>LLM-based analysis of complex climate datasets</li>
            <li>Diffusion models for high-resolution weather forecasting</li>
            <li>Virtual assistants for climate risk communication</li>
          </ol>
        </div>
      </section>

      {/* Important Dates */}
      <section>
        <h2 className="text-2xl font-bold text-blue-700 border-b pb-2 mb-4">📅 Important Dates</h2>
        <ul className="list-disc pl-6 space-y-1">
          <li><strong>Workshop Date:</strong> December 9, 2025</li>
          <li><strong>Electronic submission of full papers:</strong>  November 8, 2025</li>
          <li><strong>Notification of paper acceptance:</strong> November 10, 2025</li>
          <li><strong>Camera-ready of accepted papers:</strong> November 23, 2025</li>
        </ul>
      </section>

      {/* Important Links */}
      <section>
        <h2 className="text-2xl font-bold text-green-700 border-b pb-2 mb-4">🔗 Important Links</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Paper Submission Link:</strong>{' '}
            <a
              href="https://wi-lab.com/cyberchair/2025/bigdata25/scripts/submit.php?subarea=S14&undisplay_detail=1&wh=/cyberchair/2025/bigdata25/scripts/ws_submit.php"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline"
            >
              Submit Paper
            </a>
          </li>
          <li>
            <strong>Paper Templates:</strong>{' '}
            <a
              href="https://www.ieee.org/conferences/publishing/templates.html"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline"
            >
              IEEE Template
            </a>
          </li>
        </ul>
      </section>

      {/* Submission Guidelines */}
      <section>
        <h2 className="text-2xl font-bold text-purple-700 border-b pb-2 mb-4">📝 Paper Submission Guideline</h2>
        <p>
          The workshop invites full-length paper submissions that report ongoing or finished research (up to 10 pages in IEEE 2-column format, with reference pages counted in the 10 pages). Papers should be formatted to IEEE Computer Society Proceedings Manuscript Formatting Guidelines using Letter page format (8.5 x 11).
        </p>
        <p className="mt-2">
          Templates are available at{' '}
          <a href="https://www.ieee.org/conferences/publishing/templates.html" className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">
            https://www.ieee.org/conferences/publishing/templates.html
          </a>. All accepted papers will be included in the Workshop Proceedings published by the IEEE Computer Society Press and made available at the Conference. Proceedings will be included in the IEEE digital library indexed by Google Scholar and Scopus.
        </p>
      </section>

      {/* Contact Info */}
      <section>
        <h2 className="text-2xl font-bold text-red-700 border-b pb-2 mb-4">📞 Contact</h2>
        <div className="space-y-2">
          <div>
            <strong>Prof. Rajiv Misra</strong><br />
            E-mail: <a href="mailto:rajivm@iitp.ac.in" className="text-blue-600 underline">rajivm@iitp.ac.in</a>
          </div>
          <div>
            <strong>Mr. Praveen Kumar</strong><br />
            Ph.D. Research Scholar, Advanced Lab, IIT Patna<br />
            Contact: <a href="tel:8789382669" className="text-blue-600 underline">8789382669</a><br />
            E-mail: <a href="mailto:praveen_2221cs11@iitp.ac.in" className="text-blue-600 underline">praveen_2221cs11@iitp.ac.in</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WorkshopInfo;
