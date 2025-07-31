import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  User,
  AlertTriangle,
  Mail,
  Phone,
  DollarSign,
  Loader2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { useNavigate } from "react-router-dom";
import LeadTracker from "./LeadTracker";

const formSchema = z.object({
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  country: z.string().min(1, "Please select a country"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  scamType: z.string().min(1, "Please select the type of scam"),
  amountLost: z.string().min(1, "Please enter the amount lost"),
  experience: z
    .string()
    .min(10, "Please provide more details about your experience"),
});

type FormData = z.infer<typeof formSchema>;

const LeadForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const countries = [
    { code: "US", name: "United States", prefix: "+1" },
    { code: "CA", name: "Canada", prefix: "+1" },
    { code: "GB", name: "United Kingdom", prefix: "+44" },
    { code: "AU", name: "Australia", prefix: "+61" },
    { code: "NZ", name: "New Zealand", prefix: "+64" },
    { code: "DE", name: "Germany", prefix: "+49" },
    { code: "FR", name: "France", prefix: "+33" },
    { code: "ES", name: "Spain", prefix: "+34" },
    { code: "IT", name: "Italy", prefix: "+39" },
    { code: "NL", name: "Netherlands", prefix: "+31" },
    { code: "OTHER", name: "Other", prefix: "+1" },
  ];

  const scamTypes = [
    "Investment/Trading Platform Fraud",
    "Cryptocurrency Scam",
    "Romance Scam",
    "Tech Support Scam",
    "Online Shopping Fraud",
    "Binary Options Fraud",
    "Forex Trading Scam",
    "Fake Recovery Services",
    "Other",
  ];

  const selectedCountry = watch("country");
  const selectedCountryData = countries.find((c) => c.name === selectedCountry);

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    console.log("Form submission started:", data);

    try {
      // Get current domain
      const currentDomain = window.location.hostname;
      console.log("Current domain:", currentDomain);

      // Save to Supabase contact_leads table with phone prefix and domain
      const { data: insertData, error } = await supabase
        .from("contact_leads")
        .insert([
          {
            first_name: data.firstName,
            last_name: data.lastName,
            email: data.email,
            country: data.country,
            phone: data.phone,
            phone_prefix: selectedCountryData?.prefix || "+1",
            fraud_type: data.scamType,
            amount_lost: data.amountLost,
            story: data.experience,
            Domain: currentDomain,
          },
        ])
        .select();

      if (error) {
        console.error("Supabase error:", error);
        throw new Error(error.message);
      }

      console.log("Form submitted successfully to Supabase:", insertData);

      toast({
        title: "Consultation Request Submitted",
        description:
          "Thank you for your submission. A legal professional will contact you within 24 hours.",
      });

      // Reset form after successful submission
      reset();

      // Navigate to thank you page
      navigate("/thank-you");
    } catch (error) {
      console.error("Form submission error:", error);
      toast({
        title: "Submission Error",
        description:
          "There was an error submitting your request. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  console.log("TEST::", selectedCountry?.prefix || 1);

  return (
    <section
      id="consultation-form"
      className="bg-gradient-to-br from-slate-100 to-slate-50 py-12 sm:py-16 lg:py-20"
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          {/* Trust Badges */}
          <div className="text-center mb-8 sm:mb-12">
            <div className="flex flex-wrap justify-center gap-3 sm:gap-6 mb-6 sm:mb-8">
              <div className="bg-white rounded-xl px-3 sm:px-4 py-2 shadow-lg">
                <span className="text-sm font-semibold text-emerald-600">
                  🔒 Confidential
                </span>
              </div>
              <div className="bg-white rounded-xl px-3 sm:px-4 py-2 shadow-lg">
                <span className="text-sm font-semibold text-blue-600">
                  ⚖️ Licensed Attorneys
                </span>
              </div>
              <div className="bg-white rounded-xl px-3 sm:px-4 py-2 shadow-lg">
                <span className="text-sm font-semibold text-amber-600">
                  📞 Free Consultation
                </span>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white rounded-3xl shadow-xl p-6 sm:p-8 lg:p-12">
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 mb-4 leading-tight">
                Get Your Free Legal Consultation
              </h2>
              <p className="text-lg sm:text-xl text-slate-600 px-2">
                Speak with a licensed attorney about your legal options.
                Completely confidential.
              </p>
            </div>
            <LeadTracker />
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="space-y-8 sm:space-y-12 dr-form"
            >
              <input
  type="hidden"
  className="dr-field-suid"
  id="dr-field-suid"
  value={import.meta.env.VITE_DR_API_KEY}
/>
              <input
                type="hidden"
                className="dr-field-clickid"
                id="dr-field-clickid"
                value={"YourClickID"}
              />
              
              <input
  type="hidden"
  className="dr-campaign-id"
  id="dr-campaign-id"
  value={import.meta.env.VITE_CAMPAIGN_ID}
/>


              {/* Personal Information Section */}
              <div>
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <User className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                      Personal Information
                    </h3>
                    <p className="text-sm sm:text-base text-slate-600">
                      We keep all information strictly confidential
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <Label
                      htmlFor="firstName"
                      className="text-base font-semibold text-slate-700 mb-2 block"
                    >
                      First Name *
                    </Label>
                    <Input
                      id="firstName"
                      {...register("firstName")}
                      className="h-12 sm:h-14 rounded-2xl border-2 border-slate-200 focus:border-emerald-500 text-base sm:text-lg dr-field-fname"
                      placeholder="Enter your first name"
                    />
                    {errors.firstName && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.firstName.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <Label
                      htmlFor="lastName"
                      className="text-base font-semibold text-slate-700 mb-2 block"
                    >
                      Last Name *
                    </Label>
                    <Input
                      id="lastName"
                      {...register("lastName")}
                      className="h-12 sm:h-14 rounded-2xl border-2 border-slate-200 focus:border-emerald-500 text-base sm:text-lg dr-field-lname"
                      placeholder="Enter your last name"
                    />
                    {errors.lastName && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.lastName.message}
                      </p>
                    )}
                  </div>
                </div>

                <div className="mt-4 sm:mt-6">
                  <Label
                    htmlFor="email"
                    className="text-base font-semibold text-slate-700 mb-2 block"
                  >
                    Email Address *
                  </Label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-slate-400" />
                    <Input
                      id="email"
                      type="email"
                      {...register("email")}
                      className="h-12 sm:h-14 rounded-2xl border-2 border-slate-200 focus:border-emerald-500 text-base sm:text-lg pl-12 dr-field-email"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mt-4 sm:mt-6">
                  <div>
                    <Label
                      htmlFor="country"
                      className="text-base font-semibold text-slate-700 mb-2 block"
                    >
                      Country *
                    </Label>
                    <Select
                      onValueChange={(value) => setValue("country", value)}
                    >
                      <SelectTrigger className="h-12 sm:h-14 rounded-2xl border-2 border-slate-200 focus:border-emerald-500 text-base sm:text-lg">
                        <SelectValue placeholder="Select your country" />
                      </SelectTrigger>
                      <SelectContent className="max-h-60 bg-white">
                        {countries.map((country) => (
                          <SelectItem key={country.code} value={country.name}>
                            {country.name} ({country.prefix})
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    {errors.country && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.country.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <Label
                      htmlFor="phone"
                      className="text-base font-semibold text-slate-700 mb-2 block"
                    >
                      Phone Number *
                    </Label>
                    <div className="relative">
                      <div className="absolute left-0 top-0 h-full flex items-center z-10">
                        <div className="h-full bg-slate-50 border-r-2 border-slate-200 rounded-l-2xl px-3 flex items-center space-x-2 min-w-[80px] justify-center">
                          <Phone className="h-4 w-4 text-slate-500" />
                          <span className="text-slate-700 font-semibold text-sm">
                            {selectedCountryData?.prefix || "+1"}
                          </span>
                          <input
                            type="hidden"
                            className="dr-field-ext"
                            value={selectedCountryData?.prefix || 1}
                          />
                        </div>
                      </div>
                      <Input
                        id="phone"
                        {...register("phone")}
                        className="h-12 sm:h-14 rounded-2xl border-2 border-slate-200 focus:border-emerald-500 text-base sm:text-lg pl-20 sm:pl-24 dr-field-phone"
                        placeholder="Enter phone number"
                      />
                    </div>
                    {errors.phone && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.phone.message}
                      </p>
                    )}
                  </div>
                </div>
              </div>
              {/* Case Details Section */}
              <div>
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-10 h-10 bg-gradient-to-br from-amber-500 to-amber-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <AlertTriangle className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                      Case Details
                    </h3>
                    <p className="text-sm sm:text-base text-slate-600">
                      Help us understand your situation
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <Label
                      htmlFor="scamType"
                      className="text-base font-semibold text-slate-700 mb-2 block"
                    >
                      Type of Scam *
                    </Label>
                    <Select
                      onValueChange={(value) => setValue("scamType", value)}
                    >
                      <SelectTrigger className="h-12 sm:h-14 rounded-2xl border-2 border-slate-200 focus:border-emerald-500 text-base sm:text-lg">
                        <SelectValue placeholder="Select scam type" />
                      </SelectTrigger>
                      <SelectContent className="max-h-60 bg-white">
                        {scamTypes.map((type) => (
                          <SelectItem key={type} value={type}>
                            {type}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    {errors.scamType && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.scamType.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <Label
                      htmlFor="amountLost"
                      className="text-base font-semibold text-slate-700 mb-2 block"
                    >
                      Amount Lost *
                    </Label>
                    <div className="relative">
                      <DollarSign className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-slate-400" />
                      <Input
                        id="amountLost"
                        {...register("amountLost")}
                        className="h-12 sm:h-14 rounded-2xl border-2 border-slate-200 focus:border-emerald-500 text-base sm:text-lg pl-12"
                        placeholder="Enter amount lost"
                      />
                    </div>
                    {errors.amountLost && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.amountLost.message}
                      </p>
                    )}
                  </div>
                </div>

                <div className="mt-4 sm:mt-6">
                  <Label
                    htmlFor="experience"
                    className="text-base font-semibold text-slate-700 mb-2 block"
                  >
                    Your Experience *
                  </Label>
                  <Textarea
                    id="experience"
                    {...register("experience")}
                    className="min-h-[120px] sm:min-h-[140px] rounded-2xl border-2 border-slate-200 focus:border-emerald-500 text-base sm:text-lg resize-none p-4"
                    placeholder="Please describe what happened, including dates, websites, contact information, and any documentation you have..."
                  />
                  <p className="text-sm text-slate-500 mt-2">
                    The more details you provide, the better we can assess your
                    legal options.
                  </p>
                  {errors.experience && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.experience.message}
                    </p>
                  )}
                </div>
              </div>
              {/* Submit Section */}
              <div className="text-center space-y-6">
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white px-8 sm:px-12 py-4 sm:py-4 rounded-2xl text-lg sm:text-xl font-bold shadow-2xl hover:shadow-emerald-500/25 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none min-h-[56px]"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="h-6 w-6 animate-spin mr-3" />
                      Submitting Request...
                    </>
                  ) : (
                    "Get Free Legal Consultation"
                  )}
                </Button>

                <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-2xl p-4 sm:p-6 border-l-4 border-blue-500">
                  <p className="text-sm text-blue-800 leading-relaxed">
                    <strong>Legal Notice:</strong> By submitting this form, you
                    are requesting a free consultation. This does not create an
                    attorney-client relationship. All information will be kept
                    strictly confidential and will only be used to assess your
                    legal options.
                  </p>
                </div>

                <div className="flex justify-center space-x-6 sm:space-x-8">
                  <div className="text-center">
                    <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-1">
                      <div className="w-4 h-4 bg-emerald-600 rounded-full"></div>
                    </div>
                    <span className="text-xs text-slate-600">Confidential</span>
                  </div>
                  <div className="text-center">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-1">
                      <div className="w-4 h-4 bg-blue-600 rounded-full"></div>
                    </div>
                    <span className="text-xs text-slate-600">Licensed</span>
                  </div>
                  <div className="text-center">
                    <div className="w-10 h-10 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-1">
                      <div className="w-4 h-4 bg-amber-600 rounded-full"></div>
                    </div>
                    <span className="text-xs text-slate-600">Free</span>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadForm;
