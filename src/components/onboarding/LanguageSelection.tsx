import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check, ChevronLeft } from "lucide-react";
import { useState } from "react";

interface LanguageSelectionProps {
  onNext: (language: string) => void;
  onBack: () => void;
}

const languages = [
  { code: "en", name: "English", nativeName: "English" },
  { code: "ml", name: "Malayalam", nativeName: "മലയാളം" },
  { code: "hi", name: "Hindi", nativeName: "हिन्दी" },
  { code: "ta", name: "Tamil", nativeName: "தமிழ்" },
];

export function LanguageSelection({ onNext, onBack }: LanguageSelectionProps) {
  const [selectedLanguage, setSelectedLanguage] = useState("en");

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header */}
      <div className="flex items-center gap-4 p-6 border-b border-border">
        <Button variant="ghost" size="icon-sm" onClick={onBack}>
          <ChevronLeft className="h-5 w-5" />
        </Button>
        <h1 className="text-xl font-semibold">Choose Language</h1>
      </div>

      {/* Content */}
      <div className="flex-1 p-6">
        <div className="space-y-4">
          <p className="text-muted-foreground text-center mb-8">
            Select your preferred language for the app
          </p>
          
          {languages.map((language) => (
            <Card
              key={language.code}
              className={`p-4 cursor-pointer border-2 transition-farm ${
                selectedLanguage === language.code
                  ? "border-primary bg-primary-lighter"
                  : "border-border hover:border-primary/50"
              }`}
              onClick={() => setSelectedLanguage(language.code)}
            >
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold text-foreground">{language.name}</h3>
                  <p className="text-lg text-muted-foreground">{language.nativeName}</p>
                </div>
                {selectedLanguage === language.code && (
                  <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center">
                    <Check className="h-4 w-4 text-primary-foreground" />
                  </div>
                )}
              </div>
            </Card>
          ))}
        </div>

        {/* Continue Button */}
        <div className="mt-12">
          <Button 
            onClick={() => onNext(selectedLanguage)} 
            variant="farm" 
            size="xl" 
            className="w-full"
          >
            Continue
          </Button>
        </div>
      </div>
    </div>
  );
}