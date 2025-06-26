import '../Styles/HeaderTop.css'

export default function HeaderTop() {
  return (
    <div className="header-top">
      <div className="contact-info">
        <span>📞 +1 123 456 7890</span>
        <span>✉️ contact@gotrip.com</span>
      </div>
      <div className="social-icons">
        <a href="#"><i className="fab fa-facebook-f"></i></a>
        <a href="#"><i className="fab fa-twitter"></i></a>
        <a href="#"><i className="fab fa-instagram"></i></a>
      </div>
    </div>
  )
}
