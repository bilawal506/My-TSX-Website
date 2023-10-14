// "use client"
import { Navbar } from "../page";
import Footer from "../footer";

function Home() {
const faqData = [
    { question: 'What is the purpose of this website?', answer: 'This website is designed to provide information and resources on a specific topic.' },
    { question: 'How can I contact customer support?', answer: 'You can reach our customer support team by email at support@example.com.' },
    { question: 'Is registration required to access the content?', answer: 'No, most of our content is available to all visitors without the need for registration.' },
    { question: 'What payment methods do you accept?', answer: 'We accept major credit and debit cards, as well as PayPal for online purchases.' },
    { question: 'Can I request a refund for my purchase?', answer: 'Yes, we offer a refund policy within 30 days of purchase. Please review our refund policy for more details.' },
    { question: 'How do I reset my password?', answer: 'You can reset your password by clicking on the "Forgot Password" link on the login page and following the instructions.' },
    { question: 'Do you offer international shipping?', answer: 'Yes, we provide international shipping for our products. Shipping costs and delivery times may vary by location.' },
    { question: 'Are there any discounts or promotions available?', answer: 'We occasionally offer discounts and promotions. Please check our promotions page or subscribe to our newsletter for updates.' },
    { question: 'What browsers are supported for the best user experience?', answer: 'We recommend using the latest versions of popular browsers like Chrome, Firefox, Safari, and Edge for the best experience on our website.' },
    { question: 'How can I provide feedback or report issues with the website?', answer: 'You can provide feedback or report issues by contacting our support team or using the feedback form on the website.' },
  ];
return (<>
      <title>FAQs | My Website</title><Navbar />
  <div className="faq-container">
    <h1 style={{fontSize:80}}><strong>FAQs</strong></h1>
      {faqData.map((item, index) => (
        <div key={index} className="faq-item">
          <div className="faq-question">{item.question}</div>
          <div className="faq-answer">{item.answer}</div>
        </div>
      ))}
    </div>
    <Footer />
    
  </>)
}
export default Home;