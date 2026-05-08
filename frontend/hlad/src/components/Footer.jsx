const cols = [
  {
    heading: "HLAD",
    links: [
      "हमारे बारे में",
      "इतिहास",
      "पुरस्कार",
      "संपर्क",
    ],
  },

  {
    heading: "गतिविधियाँ",
    links: [
      "साप्ताहिक सत्र",
      "प्रतियोगिताएँ",
      "कार्यशालाएँ",
      "प्रकाशन",
    ],
  },

  {
    heading: "संसाधन",
    links: [
      "रचना संग्रह",
      "वाद-विवाद नोट्स",
      "पाठ्य सामग्री",
      "ब्लॉग",
    ],
  },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-grid">
          <div>
            <div className="footer-logo">
              HLAD
            </div>

            <div className="footer-subtitle">
              Hindi Literary & Debating
            </div>

            <p className="footer-desc">
              शब्द, विचार और संवाद के
              माध्यम से एक बेहतर भारत
              के निर्माण में योगदान।
            </p>
          </div>

          {cols.map((col) => (
            <div key={col.heading}>
              <p className="footer-heading">
                {col.heading}
              </p>

              {col.links.map((l) => (
                <a
                  key={l}
                  href="#"
                  className="footer-link"
                >
                  {l}
                </a>
              ))}
            </div>
          ))}
        </div>

        <div className="footer-bottom">
          <p className="footer-copy">
            © 2026 HLAD 
          </p>

          <p className="footer-copy">
            वसुधैव कुटुम्बकम् · NIT Kurukshetra
          </p>
        </div>
      </div>
    </footer>
  );
}