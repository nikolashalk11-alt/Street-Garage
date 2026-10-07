import React, { useState } from 'react';
import { X, Calendar, Phone, CheckCircle2, Send, Copy } from 'lucide-react';
import { copyPhoneNumber, PHONE_NUMBER } from '../utils/clipboard';

interface AppointmentModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AppointmentModal: React.FC<AppointmentModalProps> = ({ isOpen, onClose }) => {
  const [serviceType, setServiceType] = useState('Αλλαγή Ελαστικών');
  const [vehicle, setVehicle] = useState('');
  const [phone, setPhone] = useState('');
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [notes, setNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/85 backdrop-blur-md">
      <div className="relative w-full max-w-lg bg-[#18181b] rounded-[3px] border border-[#27272a] text-white overflow-hidden max-h-[90vh] overflow-y-auto">
        
        {/* Header */}
        <div className="bg-[#121212] px-5 sm:px-6 py-4 text-white flex items-center justify-between border-b border-[#27272a]">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-[#1d4ed8]/15 text-[#3b82f6] rounded-[2px] shrink-0 border border-[#1d4ed8]/30">
              <Calendar className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-heading font-bold text-base sm:text-lg uppercase tracking-[0.08em] text-white">
                Κρατηση Ραντεβου / Προσφορα
              </h3>
              <p className="text-xs text-[#94a3b8] font-medium">
                Street Garage &bull; 24/7 &bull; {PHONE_NUMBER}
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-[2px] hover:bg-[#27272a] transition-colors text-[#94a3b8] hover:text-white cursor-pointer"
            aria-label="Κλείσιμο"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-5 sm:p-6">
          {submitted ? (
            <div className="text-center py-6 sm:py-8">
              <div className="w-12 h-12 bg-[#1d4ed8]/15 text-[#3b82f6] rounded-[2px] flex items-center justify-center mx-auto mb-3 border border-[#1d4ed8]/40">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h4 className="font-heading font-bold text-lg text-white mb-2 uppercase tracking-wide">
                Το αιτημα σας καταχωρηθηκε επιτυχως!
              </h4>
              <p className="text-xs sm:text-sm text-[#cbd5e1] mb-6">
                Ευχαριστούμε {name || 'πολύ'}. Ένας τεχνικός του Street Garage θα επικοινωνήσει άμεσα μαζί σας στο {phone || 'τηλέφωνό σας'}.
              </p>
              
              <button
                type="button"
                onClick={copyPhoneNumber}
                className="w-full bg-[#222225] border border-[#333338] p-3.5 rounded-[3px] text-xs text-[#3b82f6] font-bold mb-6 flex items-center justify-center gap-2 cursor-pointer hover:bg-[#28282c]"
              >
                <Phone className="w-4 h-4 text-[#3b82f6]" />
                <span>Αντιγραφή τηλεφώνου άμεσης ανάγκης: {PHONE_NUMBER}</span>
                <Copy className="w-3.5 h-3.5 opacity-70" />
              </button>

              <button
                onClick={() => {
                  setSubmitted(false);
                  onClose();
                }}
                className="w-full py-3 bg-[#1d4ed8] hover:bg-[#1e40af] text-white font-bold rounded-[3px] text-xs transition-colors cursor-pointer font-heading uppercase tracking-wider border border-[#3b82f6]/40"
              >
                Κλεισιμο
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-[#cbd5e1] mb-1 font-heading uppercase tracking-wider">
                  Επιλογη Υπηρεσιας
                </label>
                <select
                  value={serviceType}
                  onChange={(e) => setServiceType(e.target.value)}
                  className="w-full bg-[#222225] border border-[#333338] rounded-[3px] px-3.5 py-2.5 text-xs sm:text-sm text-white font-medium focus:outline-none focus:border-[#3b82f6]"
                >
                  <option value="Αλλαγή Ελαστικών">Αντικατάσταση Ελαστικών &amp; Ζυγοστάθμιση</option>
                  <option value="3D Ευθυγράμμιση">3D Ευθυγράμμιση Τροχών</option>
                  <option value="Τακτικό Σέρβις">Τακτικό Σέρβις &amp; Αλλαγή Λαδιών/Φίλτρων</option>
                  <option value="Έλεγχος Φρένων">Έλεγχος &amp; Αλλαγή Φρένων</option>
                  <option value="24/7 Οδική Βοήθεια">Επείγουσα Οδική Βοήθεια (24/7)</option>
                  <option value="Άλλο">Άλλη Εργασία / Προσφορά</option>
                </select>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-[#cbd5e1] mb-1 font-heading uppercase tracking-wider">
                    Ονοματεπωνυμο
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="π.χ. Νίκος Παπαδόπουλος"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-[#222225] border border-[#333338] rounded-[3px] px-3.5 py-2.5 text-xs sm:text-sm text-white font-medium focus:outline-none focus:border-[#3b82f6]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#cbd5e1] mb-1 font-heading uppercase tracking-wider">
                    Τηλεφωνο Επικοινωνιας
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="π.χ. 6900000000"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full bg-[#222225] border border-[#333338] rounded-[3px] px-3.5 py-2.5 text-xs sm:text-sm text-white font-medium focus:outline-none focus:border-[#3b82f6]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-[#cbd5e1] mb-1 font-heading uppercase tracking-wider">
                    Μοντελο Οχηματος / Διασταση
                  </label>
                  <input
                    type="text"
                    placeholder="π.χ. VW Golf (205/55 R16)"
                    value={vehicle}
                    onChange={(e) => setVehicle(e.target.value)}
                    className="w-full bg-[#222225] border border-[#333338] rounded-[3px] px-3.5 py-2.5 text-xs sm:text-sm text-white font-medium focus:outline-none focus:border-[#3b82f6]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#cbd5e1] mb-1 font-heading uppercase tracking-wider">
                    Επιθυμητη Ημερομηνια
                  </label>
                  <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full bg-[#222225] border border-[#333338] rounded-[3px] px-3.5 py-2.5 text-xs sm:text-sm text-white font-medium focus:outline-none focus:border-[#3b82f6]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#cbd5e1] mb-1 font-heading uppercase tracking-wider">
                  Σημειωσεις / Περιγραφη αναγκης
                </label>
                <textarea
                  rows={2}
                  placeholder="π.χ. Έλεγχος κραδασμών στο τιμόνι ή προσφορά για ελαστικά 4 εποχών..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full bg-[#222225] border border-[#333338] rounded-[3px] px-3.5 py-2 text-xs sm:text-sm text-white font-medium focus:outline-none focus:border-[#3b82f6]"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3 bg-[#1d4ed8] hover:bg-[#1e40af] text-white font-bold rounded-[3px] text-xs transition-all flex items-center justify-center gap-2 cursor-pointer font-heading uppercase tracking-wider border border-[#3b82f6]/40"
                >
                  <Send className="w-4 h-4" />
                  <span>Αποστολη Αιτηματος</span>
                </button>
              </div>

              <div className="text-center pt-1">
                <span className="text-xs text-[#94a3b8]">ή αντιγράψτε τον αριθμό μας: </span>
                <button
                  type="button"
                  onClick={copyPhoneNumber}
                  className="text-xs font-bold text-[#3b82f6] hover:underline cursor-pointer inline-flex items-center gap-1"
                >
                  <span>{PHONE_NUMBER}</span>
                  <Copy className="w-3 h-3" />
                </button>
              </div>
            </form>
          )}
        </div>

      </div>
    </div>
  );
};
