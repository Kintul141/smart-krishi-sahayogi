import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { ChevronLeft, ChevronRight, MapPin, Wheat, User } from "lucide-react";
import { useState } from "react";

interface FarmerProfilingProps {
  onComplete: (profile: FarmerProfile) => void;
  onBack: () => void;
}

interface FarmerProfile {
  name: string;
  location: string;
  farmSize: string;
  primaryCrop: string;
  experience: string;
  farmingType: string;
}

const crops = [
  "Rice/Paddy", "Wheat", "Corn/Maize", "Sugarcane", "Cotton", 
  "Tea", "Coffee", "Coconut", "Spices", "Vegetables", "Fruits", "Other"
];

const farmingTypes = [
  "Traditional", "Organic", "Hydroponic", "Mixed Farming", "Livestock", "Aquaculture"
];

export function FarmerProfiling({ onComplete, onBack }: FarmerProfilingProps) {
  const [step, setStep] = useState(1);
  const [profile, setProfile] = useState<FarmerProfile>({
    name: "",
    location: "",
    farmSize: "",
    primaryCrop: "",
    experience: "",
    farmingType: "",
  });

  const updateProfile = (key: keyof FarmerProfile, value: string) => {
    setProfile(prev => ({ ...prev, [key]: value }));
  };

  const nextStep = () => {
    if (step < 3) setStep(step + 1);
    else onComplete(profile);
  };

  const prevStep = () => {
    if (step > 1) setStep(step - 1);
    else onBack();
  };

  const isStepValid = () => {
    switch (step) {
      case 1:
        return profile.name && profile.location;
      case 2:
        return profile.farmSize && profile.primaryCrop;
      case 3:
        return profile.experience && profile.farmingType;
      default:
        return false;
    }
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header */}
      <div className="flex items-center gap-4 p-6 border-b border-border">
        <Button variant="ghost" size="icon-sm" onClick={prevStep}>
          <ChevronLeft className="h-5 w-5" />
        </Button>
        <div className="flex-1">
          <h1 className="text-xl font-semibold">Setup Your Profile</h1>
          <p className="text-sm text-muted-foreground">Step {step} of 3</p>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="px-6 py-4 bg-muted/30">
        <div className="flex gap-2">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className={`h-2 flex-1 rounded-full transition-farm ${
                i <= step ? "bg-primary" : "bg-muted"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 p-6">
        <Card className="p-6 shadow-card">
          {step === 1 && (
            <div className="space-y-6">
              <div className="text-center mb-8">
                <div className="w-16 h-16 rounded-full bg-primary-lighter flex items-center justify-center mx-auto mb-4">
                  <User className="h-8 w-8 text-primary" />
                </div>
                <h2 className="text-xl font-semibold mb-2">Personal Information</h2>
                <p className="text-muted-foreground">Tell us about yourself</p>
              </div>

              <div>
                <Label htmlFor="name">Full Name</Label>
                <Input
                  id="name"
                  placeholder="Enter your full name"
                  value={profile.name}
                  onChange={(e) => updateProfile("name", e.target.value)}
                  className="mt-2"
                />
              </div>

              <div>
                <Label htmlFor="location">Farm Location</Label>
                <Input
                  id="location"
                  placeholder="Village, District, State"
                  value={profile.location}
                  onChange={(e) => updateProfile("location", e.target.value)}
                  className="mt-2"
                />
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-6">
              <div className="text-center mb-8">
                <div className="w-16 h-16 rounded-full bg-success/20 flex items-center justify-center mx-auto mb-4">
                  <MapPin className="h-8 w-8 text-success" />
                </div>
                <h2 className="text-xl font-semibold mb-2">Farm Details</h2>
                <p className="text-muted-foreground">Tell us about your farm</p>
              </div>

              <div>
                <Label htmlFor="farmSize">Farm Size (in acres)</Label>
                <Input
                  id="farmSize"
                  type="number"
                  placeholder="e.g., 2.5"
                  value={profile.farmSize}
                  onChange={(e) => updateProfile("farmSize", e.target.value)}
                  className="mt-2"
                />
              </div>

              <div>
                <Label>Primary Crop</Label>
                <div className="grid grid-cols-2 gap-2 mt-2">
                  {crops.map((crop) => (
                    <Button
                      key={crop}
                      variant={profile.primaryCrop === crop ? "farm" : "outline"}
                      size="sm"
                      onClick={() => updateProfile("primaryCrop", crop)}
                      className="justify-start"
                    >
                      {crop}
                    </Button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-6">
              <div className="text-center mb-8">
                <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-4">
                  <Wheat className="h-8 w-8 text-accent" />
                </div>
                <h2 className="text-xl font-semibold mb-2">Farming Experience</h2>
                <p className="text-muted-foreground">Help us personalize your experience</p>
              </div>

              <div>
                <Label htmlFor="experience">Years of Experience</Label>
                <Input
                  id="experience"
                  type="number"
                  placeholder="e.g., 5"
                  value={profile.experience}
                  onChange={(e) => updateProfile("experience", e.target.value)}
                  className="mt-2"
                />
              </div>

              <div>
                <Label>Farming Type</Label>
                <div className="grid grid-cols-2 gap-2 mt-2">
                  {farmingTypes.map((type) => (
                    <Button
                      key={type}
                      variant={profile.farmingType === type ? "farm" : "outline"}
                      size="sm"
                      onClick={() => updateProfile("farmingType", type)}
                      className="justify-start"
                    >
                      {type}
                    </Button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Navigation */}
          <div className="flex gap-4 mt-8">
            <Button 
              onClick={prevStep}
              variant="outline" 
              className="flex-1"
            >
              <ChevronLeft className="h-4 w-4 mr-2" />
              Back
            </Button>
            <Button 
              onClick={nextStep}
              disabled={!isStepValid()}
              variant="farm" 
              className="flex-1"
            >
              {step === 3 ? "Complete Setup" : "Next"}
              {step < 3 && <ChevronRight className="h-4 w-4 ml-2" />}
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
}