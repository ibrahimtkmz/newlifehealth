"use client";

import { useState } from "react";
import { MessageCircle, ChevronUp } from "lucide-react";

const departments = [
  {
    label: "Acente Başvurusu",
    phone: "905551110001",
    message: "Merhaba, acente iş ortaklığı hakkında bilgi almak istiyorum."
  },
  {
    label: "Teknik Destek",
    phone: "905551110002",
    message: "Merhaba, teknik destek talebim var."
  },
  {
    label: "Genel Bilgi",
    phone: "905551110003",
    message: "Merhaba, hizmetleriniz hakkında genel bilgi almak istiyorum."
  }
];

export default function WhatsappMultiButton() {
  const [open, setOpen] = useState(false);

  return (
    <div className={`wa-multi ${open ? "open" : ""}`}>
      <div className="wa-menu" role="menu" aria-label="WhatsApp departman menüsü">
        {departments.map((item) => (
          <a
            key={item.label}
            href={`https://wa.me/${item.phone}?text=${encodeURIComponent(item.message)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="wa-item"
            role="menuitem"
          >
            {item.label}
          </a>
        ))}
      </div>

      <button
        type="button"
        className="wa-toggle"
        onClick={() => setOpen((prev) => !prev)}
        aria-expanded={open}
        aria-label="WhatsApp menüsünü aç"
      >
        {open ? <ChevronUp size={20} /> : <MessageCircle size={20} />}
      </button>
    </div>
  );
}
