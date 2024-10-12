import React, { useState } from 'react';

const Steps = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: 'How do I know if a product is available in boutiques?',
      answer:
        'Remember you can query the status of your orders any time in My orders in the My account section. If you are not registered at Mango.com, you can access directly in the Orders section. In this case, you will have to enter your e-mail address and order number.',
    },
    {
      question: 'How can I find the prices or get other information?',
      answer:
        'Remember you can query the status of your orders any time in My orders in the My account section. If you are not registered at Mango.com, you can access directly in the Orders section. In this case, you will have to enter your e-mail address and order number.',
    },
    {
      question: 'How many collections come out every year?',
      answer:
        'Remember you can query the status of your orders any time in My orders in the My account section. If you are not registered at Mango.com, you can access directly in the Orders section. In this case, you will have to enter your e-mail address and order number.',
    },
    {
      question: 'Are all of the fashion collections featured on the website?',
      answer:
        'Remember you can query the status of your orders any time in My orders in the My account section. If you are not registered at Mango.com, you can access directly in the Orders section. In this case, you will have to enter your e-mail address and order number.',
    },
    {
      question: 'Where do I find products that I have seen in magazi?',
      answer:
        'Remember you can query the status of your orders any time in My orders in the My account section. If you are not registered at Mango.com, you can access directly in the Orders section. In this case, you will have to enter your e-mail address and order number.',
    },
  ];

  return (
    <div className="lg:container lg:mx-auto lg:py-16 md:py-12 md:px-6 py-12 px-4 bg-szGreen">
      <h1 className="text-center dark:text-white lg:text-4xl text-3xl lg:leading-9 leading-7 text-szBeige font-semibold">
        FAQ&apos;s
      </h1>
      <div className="lg:w-8/12 w-full mx-auto">
        {faqs.map((faq, index) => (
          <div key={index}>
            <hr className="w-full lg:mt-10 md:mt-12 md:mb-8 my-8" />
            <div className="w-full md:px-6">
              <div className="flex justify-between items-center w-full">
                <div>
                  <p className="flex justify-center items-center dark:text-white font-medium text-base leading-6 lg:leading-4 text-gray-800">
                    <span className="lg:mr-6 mr-4 dark:text-white lg:text-2xl md:text-xl text-lg leading-6 md:leading-5 lg:leading-4 font-semibold text-gray-800">
                      Q{index + 1}.
                    </span>
                    {faq.question}
                  </p>
                </div>
                <button
                  aria-label="toggler"
                  onClick={() => toggleFAQ(index)}
                  className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800"
                >
                  <img
                    className={`transform ${activeIndex === index ? 'rotate-180' : ''}`}
                    src="https://tuk-cdn.s3.amazonaws.com/can-uploader/faq-8-svg2.svg"
                    alt="toggler"
                  />
                </button>
              </div>
              {activeIndex === index && (
                <div className="mt-6 w-full">
                  <p className="text-base leading-6 text-szText dark:text-szText font-normal">{faq.answer}</p>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Steps;
