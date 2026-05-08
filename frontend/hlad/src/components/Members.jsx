/* src/components/Members.jsx */

import {useReveal} from "../hooks/useReveal";

const members = [
  {
    name: "अर्जुन वर्मा",
    role: "अध्यक्ष",
    init: "अ",
    c1: "#D6EDEA",
    c2: "#1B6B60",
  },
  {
    name: "काव्या शुक्ल",
    role: "उपाध्यक्ष",
    init: "का",
    c1: "#F5E8CC",
    c2: "#C07C1A",
  },
  {
    name: "देव राणा",
    role: "साहित्य प्रमुख",
    init: "दे",
    c1: "#E6ECF2",
    c2: "#4A6478",
  },
  {
    name: "इशा गुप्ता",
    role: "वाद-विवाद प्रमुख",
    init: "इ",
    c1: "#D6EDEA",
    c2: "#1B6B60",
  },
  {
    name: "मयंक सेन",
    role: "सचिव",
    init: "म",
    c1: "#F5E8CC",
    c2: "#C07C1A",
  },
  {
    name: "रिया नायर",
    role: "प्रकाशन",
    init: "रि",
    c1: "#E6ECF2",
    c2: "#4A6478",
  },
];

function MemberCard({ member }) {

  const ref = useReveal();

  return (
    <div
      ref={ref}
      className="member-card reveal"
    >

      <div
        className="member-avatar"
        style={{
          background: member.c1,
          color: member.c2,
        }}
      >
        {member.init}
      </div>

      <div className="member-role-badge">
        {member.role}
      </div>

      <p
        style={{
          fontFamily: "var(--font-hi)",
          fontSize: 14,
          fontWeight: 600,
          color: "var(--dark)",
          marginTop: 8,
        }}
      >
        {member.name}
      </p>

    </div>
  );
}

export default function Members() {

  const ref = useReveal();

  return (
    <section
      style={{
        background: "var(--bg)",
        padding: "100px 40px",
      }}
    >

      <div
        style={{
          maxWidth: 1300,
          margin: "0 auto",
        }}
      >

        <div
          ref={ref}
          className="reveal"
          style={{
            textAlign: "center",
            marginBottom: 64,
          }}
        >

          <div
            className="sec-label"
            style={{
              justifyContent: "center",
            }}
          >
            परिषद
          </div>

          <h2 className="sec-h2">
            क्लब नेतृत्व
          </h2>

          <p
            style={{
              fontFamily: "var(--font-hi)",
              fontSize: 16,
              color: "var(--muted)",
              marginTop: 16,
            }}
          >
            वे युवा जो हिंदी साहित्य और विचार की मशाल थामे हैं।
          </p>

        </div>

        <div
          className="members-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3,1fr)",
            gap: 24,
          }}
        >

          {members.map((member) => (

            <MemberCard
              key={member.name}
              member={member}
            />

          ))}

        </div>

      </div>

    </section>
  );
}