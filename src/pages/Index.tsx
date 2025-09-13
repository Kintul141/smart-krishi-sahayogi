import { useState } from "react";
import { WelcomeScreen } from "@/components/onboarding/WelcomeScreen";
import { LanguageSelection } from "@/components/onboarding/LanguageSelection";
import { PhoneVerification } from "@/components/onboarding/PhoneVerification";
import { FarmerProfiling } from "@/components/onboarding/FarmerProfiling";
import { Dashboard } from "@/components/Dashboard";
import { ChatInterface } from "@/components/ChatInterface";
import { Marketplace } from "@/components/Marketplace";
import { Profile } from "@/components/Profile";
import { Navigation } from "@/components/Navigation";

type OnboardingStep = "welcome" | "language" | "phone" | "profile" | "complete";

interface FarmerProfile {
  name: string;
  location: string;
  farmSize: string;
  primaryCrop: string;
  experience: string;
  farmingType: string;
}

const Index = () => {
  const [onboardingStep, setOnboardingStep] = useState<OnboardingStep>("welcome");
  const [selectedLanguage, setSelectedLanguage] = useState("en");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [farmerProfile, setFarmerProfile] = useState<FarmerProfile | null>(null);
  const [activeTab, setActiveTab] = useState("home");
  const [showChat, setShowChat] = useState(false);

  // Handle onboarding flow
  if (onboardingStep !== "complete") {
    switch (onboardingStep) {
      case "welcome":
        return <WelcomeScreen onNext={() => setOnboardingStep("language")} />;
      case "language":
        return (
          <LanguageSelection
            onNext={(lang) => {
              setSelectedLanguage(lang);
              setOnboardingStep("phone");
            }}
            onBack={() => setOnboardingStep("welcome")}
          />
        );
      case "phone":
        return (
          <PhoneVerification
            onNext={(phone) => {
              setPhoneNumber(phone);
              setOnboardingStep("profile");
            }}
            onBack={() => setOnboardingStep("language")}
          />
        );
      case "profile":
        return (
          <FarmerProfiling
            onComplete={(profile) => {
              setFarmerProfile(profile);
              setOnboardingStep("complete");
            }}
            onBack={() => setOnboardingStep("phone")}
          />
        );
    }
  }

  // Main app after onboarding
  if (showChat) {
    return <ChatInterface onBack={() => setShowChat(false)} />;
  }

  const renderMainContent = () => {
    switch (activeTab) {
      case "home":
        return (
          <Dashboard
            farmerName={farmerProfile?.name || "Farmer"}
            onChatOpen={() => setShowChat(true)}
          />
        );
      case "activity":
        return (
          <div className="min-h-screen bg-background pb-20 flex items-center justify-center">
            <div className="text-center p-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">Activity Log</h2>
              <p className="text-muted-foreground">Track your farming activities here</p>
            </div>
          </div>
        );
      case "marketplace":
        return (
          <Marketplace
            onCreateListing={() => {
              // Handle create listing
              console.log("Create listing");
            }}
          />
        );
      case "schemes":
        return (
          <div className="min-h-screen bg-background pb-20 flex items-center justify-center">
            <div className="text-center p-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">Government Schemes</h2>
              <p className="text-muted-foreground">Find relevant schemes for farmers</p>
            </div>
          </div>
        );
      case "profile":
        return (
          <Profile
            farmerProfile={farmerProfile!}
            phoneNumber={phoneNumber}
            onEditProfile={() => {
              // Handle edit profile
              console.log("Edit profile");
            }}
          />
        );
      default:
        return null;
    }
  };

  return (
    <>
      {renderMainContent()}
      <Navigation activeTab={activeTab} onTabChange={setActiveTab} />
    </>
  );
};

export default Index;
