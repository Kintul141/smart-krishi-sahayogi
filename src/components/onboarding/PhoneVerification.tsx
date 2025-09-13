import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ChevronLeft, Phone } from "lucide-react";
import { useState } from "react";

interface PhoneVerificationProps {
  onNext: (phoneNumber: string) => void;
  onBack: () => void;
}

export function PhoneVerification({ onNext, onBack }: PhoneVerificationProps) {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [otp, setOtp] = useState("");
  const [step, setStep] = useState<"phone" | "otp">("phone");
  const [isLoading, setIsLoading] = useState(false);

  const handleSendOtp = async () => {
    if (phoneNumber.length !== 10) return;
    
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setStep("otp");
    }, 1500);
  };

  const handleVerifyOtp = async () => {
    if (otp.length !== 6) return;
    
    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      onNext(phoneNumber);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header */}
      <div className="flex items-center gap-4 p-6 border-b border-border">
        <Button variant="ghost" size="icon-sm" onClick={step === "phone" ? onBack : () => setStep("phone")}>
          <ChevronLeft className="h-5 w-5" />
        </Button>
        <h1 className="text-xl font-semibold">
          {step === "phone" ? "Phone Verification" : "Enter OTP"}
        </h1>
      </div>

      {/* Content */}
      <div className="flex-1 p-6">
        <Card className="p-6 shadow-card">
          <div className="text-center mb-8">
            <div className="w-16 h-16 rounded-full bg-primary-lighter flex items-center justify-center mx-auto mb-4">
              <Phone className="h-8 w-8 text-primary" />
            </div>
            <h2 className="text-xl font-semibold mb-2">
              {step === "phone" ? "Enter Your Phone Number" : "Verify Your Phone"}
            </h2>
            <p className="text-muted-foreground">
              {step === "phone" 
                ? "We'll send you a verification code" 
                : `Code sent to +91 ${phoneNumber}`}
            </p>
          </div>

          {step === "phone" ? (
            <div className="space-y-6">
              <div>
                <Label htmlFor="phone">Phone Number</Label>
                <div className="flex gap-2 mt-2">
                  <div className="flex items-center justify-center bg-muted px-3 py-2 rounded-md border">
                    <span className="text-sm font-medium">+91</span>
                  </div>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="9876543210"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value.replace(/\D/g, "").slice(0, 10))}
                    className="flex-1"
                  />
                </div>
              </div>
              
              <Button 
                onClick={handleSendOtp}
                disabled={phoneNumber.length !== 10 || isLoading}
                variant="farm" 
                size="lg" 
                className="w-full"
              >
                {isLoading ? "Sending..." : "Send OTP"}
              </Button>
            </div>
          ) : (
            <div className="space-y-6">
              <div>
                <Label htmlFor="otp">Enter 6-digit OTP</Label>
                <Input
                  id="otp"
                  type="text"
                  placeholder="123456"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value.replace(/\D/g, "").slice(0, 6))}
                  className="text-center text-2xl tracking-widest mt-2"
                  maxLength={6}
                />
              </div>
              
              <Button 
                onClick={handleVerifyOtp}
                disabled={otp.length !== 6 || isLoading}
                variant="farm" 
                size="lg" 
                className="w-full"
              >
                {isLoading ? "Verifying..." : "Verify & Continue"}
              </Button>

              <Button 
                onClick={() => setStep("phone")}
                variant="ghost" 
                className="w-full"
              >
                Change Phone Number
              </Button>
            </div>
          )}
        </Card>
      </div>
    </div>
  );
}