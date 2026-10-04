"use client";

import { useState, type FormEvent } from "react";
import Button from "@/components/ui/Button";
import { DIAL_CODES, URLS } from "@/data/site";
import { useOtpCooldown } from "@/hooks/useOtpCooldown";
import { isValidEmail, isValidMobile, isValidName } from "@/lib/validators";

type Field = "name" | "mobile" | "otp" | "email" | "consent";
type Errors = Partial<Record<Field, string>>;

const FIELD_IDS: Record<Field, string> = {
  name: "fullName",
  mobile: "mobile",
  otp: "otp",
  email: "email",
  consent: "consent",
};

export default function RegistrationCard() {
  const [name, setName] = useState("");
  const [dial, setDial] = useState("+91");
  const [mobile, setMobile] = useState("");
  const [otp, setOtp] = useState("");
  const [email, setEmail] = useState("");
  const [consent, setConsent] = useState(false);
  const [otpSent, setOtpSent] = useState(false);
  const [verified, setVerified] = useState(false);
  const [errors, setErrors] = useState<Errors>({});
  const [registeredAs, setRegisteredAs] = useState<string | null>(null);
  const { remaining, start, reset } = useOtpCooldown(30);

  const mobileOk = isValidMobile(dial, mobile);
  const country = dial === "+91" ? "Domestic (Indian Resident)" : "International";
  const setError = (field: Field, message?: string) => setErrors((prev) => ({ ...prev, [field]: message }));

  const resetOtp = () => {
    setOtp("");
    setOtpSent(false);
    setVerified(false);
    reset();
  };

  const checkName = () => {
    const ok = isValidName(name);
    setError("name", ok ? undefined : "Enter your full name using letters only.");
    return ok;
  };
  const checkMobile = () => {
    setError("mobile", mobileOk ? undefined : dial === "+91" ? "Enter a valid 10-digit mobile number." : "Enter a valid mobile number.");
    return mobileOk;
  };
  const checkEmail = () => {
    const ok = isValidEmail(email);
    setError("email", ok ? undefined : "Enter a valid email id, like name@example.com.");
    return ok;
  };

  const sendOtp = () => {
    if (!checkMobile()) return;
    setOtpSent(true);
    start();
  };

  const onOtpChange = (value: string) => {
    const digits = value.replace(/\D/g, "").slice(0, 6);
    setOtp(digits);
    if (digits.length === 6) {
      setVerified(true);
      setError("otp", undefined);
    }
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const next: Errors = {
      name: checkName() ? undefined : "Enter your full name using letters only.",
      mobile: mobileOk ? undefined : "Enter a valid mobile number.",
      otp: verified ? undefined : otpSent ? "Enter the 6-digit OTP to verify your number." : "Verify your mobile number with an OTP.",
      email: isValidEmail(email) ? undefined : "Enter a valid email id, like name@example.com.",
      consent: consent ? undefined : "Agree to the Privacy Policy and Terms & Conditions to continue.",
    };
    setErrors(next);
    const firstInvalid = (Object.keys(FIELD_IDS) as Field[]).find((f) => next[f]);
    if (firstInvalid) {
      const id = firstInvalid === "otp" && !otpSent ? "sendOtp" : FIELD_IDS[firstInvalid];
      document.getElementById(id)?.focus();
      return;
    }
    setRegisteredAs(name.trim());
  };

  if (registeredAs) {
    return (
      <div id="register" className="rounded-[20px] border border-line bg-surface p-6 shadow-[0_24px_48px_-16px_rgba(20,18,26,0.28)] sm:p-8" role="status">
        <h2 className="text-[1.6rem]">You&apos;re registered</h2>
        <p className="mt-3 text-muted">
          Thank you, {registeredAs}. Log in with {dial} {mobile.trim()} to add your academic details and upload your documents.
        </p>
        <Button href={URLS.admission} className="mt-5">Continue to application</Button>
      </div>
    );
  }

  return (
    <div id="register" className="rounded-[20px] border border-line bg-surface p-6 shadow-[0_24px_48px_-16px_rgba(20,18,26,0.28)] sm:p-8">
      <h2 className="text-[1.7rem] after:mt-2.5 after:block after:h-[5px] after:w-14 after:rounded-full after:bg-gold">
        Registrations open
      </h2>
      <p className="mt-3 text-[0.95rem] text-muted">
        Register as a user first. You can then log in with your mobile number to complete your application.
      </p>

      <form onSubmit={onSubmit} noValidate autoComplete="off">
        <div className="mt-4">
          <label className="field-label" htmlFor="fullName">Full name <span className="text-accent">*</span></label>
          <input
            id="fullName" type="text" className="control" maxLength={50} placeholder="Enter full name"
            autoComplete="name" value={name} onChange={(e) => setName(e.target.value)} onBlur={checkName}
            aria-invalid={!!errors.name} aria-describedby="err-name" required
          />
          <div id="err-name" className="field-error" aria-live="polite">{errors.name}</div>
        </div>

        <div className="mt-4">
          <label className="field-label" htmlFor="mobile">Mobile no. <span className="text-accent">*</span></label>
          <div className="grid grid-cols-[112px_1fr] gap-2">
            <select
              className="control" aria-label="Country code" value={dial}
              onChange={(e) => { setDial(e.target.value); resetOtp(); }}
            >
              {DIAL_CODES.map((d) => <option key={d.code} value={d.code}>{d.label}</option>)}
            </select>
            <input
              id="mobile" type="tel" inputMode="numeric" className="control" maxLength={14} placeholder="Enter mobile no."
              autoComplete="tel-national" value={mobile}
              onChange={(e) => { setMobile(e.target.value.replace(/[^\d\s]/g, "")); if (otpSent || verified) resetOtp(); }}
              onBlur={() => mobile && checkMobile()}
              aria-invalid={!!errors.mobile} aria-describedby="err-mobile" required
            />
          </div>
          <div id="err-mobile" className="field-error" aria-live="polite">{errors.mobile}</div>
          <Button id="sendOtp" variant="ghost" className="mt-1 w-full" disabled={!mobileOk || remaining > 0 || verified} onClick={sendOtp}>
            {remaining > 0 ? `Resend in ${remaining}s` : otpSent ? "Resend OTP" : "Send OTP"}
          </Button>
          <div className={`mt-1.5 text-sm ${verified ? "font-semibold text-[var(--ok)]" : "text-muted"}`} aria-live="polite">
            {verified
              ? "Mobile number verified."
              : otpSent && `We sent a 6-digit code to ${dial} ${mobile.trim()}. (Demo: any 6 digits will verify.)`}
          </div>
        </div>

        {otpSent && (
          <div className="mt-4">
            <label className="field-label" htmlFor="otp">6-digit OTP <span className="text-accent">*</span></label>
            <input
              id="otp" type="text" inputMode="numeric" className="control" maxLength={6} placeholder="Enter OTP"
              autoComplete="one-time-code" autoFocus value={otp} onChange={(e) => onOtpChange(e.target.value)}
              aria-invalid={!!errors.otp} aria-describedby="err-otp"
            />
            <div id="err-otp" className="field-error" aria-live="polite">{errors.otp}</div>
          </div>
        )}
        {!otpSent && errors.otp && <div className="field-error" aria-live="polite">{errors.otp}</div>}

        <div className="mt-4">
          <label className="field-label" htmlFor="email">Email id <span className="text-accent">*</span></label>
          <input
            id="email" type="email" className="control" maxLength={100} placeholder="Enter email id"
            autoComplete="email" value={email} onChange={(e) => setEmail(e.target.value)} onBlur={() => email && checkEmail()}
            aria-invalid={!!errors.email} aria-describedby="err-email" required
          />
          <div id="err-email" className="field-error" aria-live="polite">{errors.email}</div>
        </div>

        <input type="hidden" name="country" value={country} readOnly />

        <label htmlFor="consent" className="mt-4 flex items-start gap-3 text-[0.92rem] text-muted">
          <input id="consent" type="checkbox" className="mt-0.5 h-[22px] w-[22px] shrink-0 accent-crimson" checked={consent} onChange={(e) => setConsent(e.target.checked)} />
          <span>
            I agree to the <a className="font-semibold text-accent" href={URLS.privacy}>Privacy Policy</a> and{" "}
            <a className="font-semibold text-accent" href={URLS.terms}>Terms &amp; Conditions</a>.
          </span>
        </label>
        <div className="field-error" aria-live="polite">{errors.consent}</div>

        <Button type="submit" className="mt-3 w-full">Register</Button>
      </form>
    </div>
  );
}
