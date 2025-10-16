"use client"

import { useEffect, useMemo, useState, type ReactNode } from "react"
import CalEmbed from "@calcom/embed-react"
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { cn } from "@/lib/utils"

const phoneCountries = [
  { code: "US", name: "United States", dialCode: "+1" },
  { code: "IN", name: "India", dialCode: "+91" },
  { code: "GB", name: "United Kingdom", dialCode: "+44" },
  { code: "AE", name: "United Arab Emirates", dialCode: "+971" },
  { code: "SG", name: "Singapore", dialCode: "+65" },
  { code: "AU", name: "Australia", dialCode: "+61" },
  { code: "CA", name: "Canada", dialCode: "+1" },
  { code: "DE", name: "Germany", dialCode: "+49" },
  { code: "FR", name: "France", dialCode: "+33" },
  { code: "ES", name: "Spain", dialCode: "+34" },
  { code: "NL", name: "Netherlands", dialCode: "+31" },
  { code: "SE", name: "Sweden", dialCode: "+46" },
  { code: "CH", name: "Switzerland", dialCode: "+41" },
] as const

type WorkWithMeModalProps = {
  trigger: ReactNode
  onOpenChange?: (open: boolean) => void
}

type FormState = {
  name: string
  company: string
  email: string
  phone: {
    country: string
    number: string
  }
  services: string[]
  budget: string
  message: string
}

type SimpleFormField = "name" | "company" | "email" | "budget" | "message"

const defaultFormState: FormState = {
  name: "",
  company: "",
  email: "",
  phone: {
    country: "US",
    number: "",
  },
  services: [],
  budget: "",
  message: "",
}

const serviceOptions = [
  { value: "branding", label: "Branding" },
  { value: "landing-page", label: "Landing Page" },
  { value: "multi-page-website", label: "Multi-page Website" },
  { value: "automation", label: "Automation & Workflows" },
  { value: "product-build", label: "Product Build (No/Low Code)" },
  { value: "ai-integration", label: "AI Integration" },
]

const budgetOptions = [
  { value: "under-2k", label: "Below $2k" },
  { value: "2k-5k", label: "$2k – $5k" },
  { value: "5k-10k", label: "$5k – $10k" },
  { value: "10k-plus", label: "$10k+" },
  { value: "not-sure", label: "Not sure yet" },
]

export function WorkWithMeModal({ trigger, onOpenChange }: WorkWithMeModalProps) {
  const [open, setOpen] = useState(false)
  const [activeTab, setActiveTab] = useState<"call" | "message">("call")
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const updateMatch = () => {
      if (typeof window !== "undefined") {
        setIsMobile(window.matchMedia("(max-width: 639px)").matches)
      }
    }

    updateMatch()
    window.addEventListener("resize", updateMatch)
    return () => {
      window.removeEventListener("resize", updateMatch)
    }
  }, [])

  const handleMobileClick = () => {
    if (typeof window !== "undefined") {
      window.open("https://cal.com/sethiamehul14/30min", "_blank", "noopener,noreferrer")
    }
  }

  const handleOpenChange = (next: boolean) => {
    setOpen(next)
    if (!next) {
      setActiveTab("call")
    }
    onOpenChange?.(next)
  }

  if (isMobile) {
    return (
      <div onClick={handleMobileClick} className="cursor-pointer">
        {trigger}
      </div>
    )
  }

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="top-[5vh] left-1/2 -translate-x-1/2 translate-y-0 sm:top-1/2 sm:-translate-y-1/2 max-w-[860px] rounded-[28px] border-0 bg-white p-0 shadow-[0px_24px_72px_rgba(28,24,21,0.16)] sm:max-w-[900px] max-h-[calc(100dvh-24px)] sm:max-h-[92vh] overflow-hidden">
        <div className="flex max-h-[calc(100dvh-24px)] w-full flex-col gap-5 overflow-y-auto p-6 sm:max-h-[92vh] sm:p-7 lg:p-8">
          <DialogTitle className="text-center text-xl font-semibold text-[#1E1A17] sm:text-[26px]">
            Work with us
          </DialogTitle>

          <Tabs
            value={activeTab}
            onValueChange={(value) => setActiveTab(value as typeof activeTab)}
            className="flex w-full flex-col items-center gap-5"
          >
            <TabsList className="inline-flex w-full max-w-[360px] items-center justify-center rounded-full bg-[#F1EFEC] p-1 text-xs font-semibold text-[#847E7A] sm:text-sm">
              <TabsTrigger
                value="call"
                className={cn(
                  "data-[state=active]:bg-white data-[state=active]:text-[#1E1A17] flex-1 rounded-full px-4 py-2 text-xs font-semibold transition sm:text-sm",
                  "data-[state=inactive]:text-[#847E7A]",
                )}
              >
                Book a call
              </TabsTrigger>
              <TabsTrigger
                value="message"
                className={cn(
                  "data-[state=active]:bg-white data-[state=active]:text-[#1E1A17] flex-1 rounded-full px-4 py-2 text-xs font-semibold transition sm:text-sm",
                  "data-[state=inactive]:text-[#847E7A]",
                )}
              >
                Send a message
              </TabsTrigger>
            </TabsList>

            <TabsContent value="call" className="w-full">
              <BookCallPane />
            </TabsContent>

            <TabsContent value="message" className="w-full">
              <ContactForm />
            </TabsContent>
          </Tabs>
        </div>
      </DialogContent>
    </Dialog>
  )
}

function BookCallPane() {
  return (
    <div className="flex w-full flex-col items-center gap-4 pb-2">
      <div className="flex flex-col gap-1.5 text-center text-sm text-[#55504C] sm:text-base">
        <p className="font-semibold text-[15px] text-[#1E1A17] sm:text-lg">Free 30 min discovery call</p>
        <p>
          Explore how Senseibles works, align on scope, and see if we&apos;re the right partner for your next build.
        </p>
      </div>
      <div className="relative w-full overflow-hidden rounded-[26px] border border-[#E6E1DC] bg-white shadow-[0px_20px_48px_rgba(30,26,23,0.1)]">
        <CalEmbed
          calLink="sethiamehul14/30min"
          style={{ width: "100%", height: "min(58vh, 520px)" }}
          config={{ layout: "month_view", primaryColor: "#37322F", hideEventTypeDetails: false }}
        />
      </div>
      <p className="text-center text-xs text-[#847E7A] sm:text-sm">
        Calendars update in real time — choose a slot that fits and we&apos;ll confirm instantly.
      </p>
    </div>
  )
}

type ContactFormState = "idle" | "loading" | "success" | "error"

function ContactForm() {
  const [form, setForm] = useState<FormState>(defaultFormState)
  const [status, setStatus] = useState<ContactFormState>("idle")
  const [error, setError] = useState<string | null>(null)

  const selectedPhoneCountry = useMemo(
    () => phoneCountries.find((country) => country.code === form.phone.country),
    [form.phone.country],
  )

  const toggleService = (value: string) => {
    handleFieldInteraction()
    setForm((prev) => {
      const exists = prev.services.includes(value)
      const services = exists ? prev.services.filter((item) => item !== value) : [...prev.services, value]
      return { ...prev, services }
    })
  }

  const updateField = <K extends SimpleFormField>(field: K, value: FormState[K]) => {
    handleFieldInteraction()
    setForm((prev) => ({ ...prev, [field]: value }))
  }

  const resetForm = () => {
    setForm(defaultFormState)
    setStatus("success")
  }

  const handleFieldInteraction = () => {
    setStatus((prev) => (prev === "success" || prev === "error" ? "idle" : prev))
    if (error) {
      setError(null)
    }
  }

  const updatePhone = (patch: Partial<FormState["phone"]>) => {
    handleFieldInteraction()
    setForm((prev) => ({
      ...prev,
      phone: {
        ...prev.phone,
        ...patch,
      },
    }))
  }

  const servicesLabel = form.services.length
    ? `Selected: ${form.services.length}`
    : "What can I help you with?"

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setStatus("loading")
    setError(null)

    try {
      const payload = {
        ...form,
        name: form.name.trim(),
        company: form.company.trim(),
        email: form.email.trim(),
        phone: {
          country: form.phone.country,
          number: form.phone.number.trim(),
        },
        message: form.message.trim(),
      }

      const response = await fetch("/api/loops-contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      })

      if (!response.ok) {
        const payload = await response.json().catch(() => ({}))
        throw new Error(payload?.error ?? "Unable to send your message right now.")
      }

      resetForm()
    } catch (err) {
      console.error(err)
      setStatus("error")
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.")
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex w-full flex-col gap-4">
      <div className="grid gap-3 sm:grid-cols-2">
        <div className="flex flex-col gap-1.5">
          <Label htmlFor="contact-name" className="text-xs font-medium uppercase tracking-[0.22em] text-[#847E7A]">
            FULL NAME
          </Label>
          <Input
            id="contact-name"
            placeholder="Your full name"
            value={form.name}
            onChange={(event) => updateField("name", event.target.value)}
            required
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <Label htmlFor="contact-company" className="text-xs font-medium uppercase tracking-[0.22em] text-[#847E7A]">
            COMPANY
          </Label>
          <Input
            id="contact-company"
            placeholder="Company or team name"
            value={form.company}
            onChange={(event) => updateField("company", event.target.value)}
          />
        </div>
      </div>

      <div className="grid gap-3 sm:grid-cols-2">
        <div className="flex flex-col gap-1.5">
          <Label htmlFor="contact-email" className="text-xs font-medium uppercase tracking-[0.22em] text-[#847E7A]">
            EMAIL ADDRESS
          </Label>
          <Input
            id="contact-email"
            type="email"
            placeholder="you@company.com"
            value={form.email}
            onChange={(event) => updateField("email", event.target.value)}
            required
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <Label className="text-xs font-medium uppercase tracking-[0.22em] text-[#847E7A]">PHONE</Label>
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
            <Select value={form.phone.country} onValueChange={(value) => updatePhone({ country: value })}>
              <SelectTrigger className="w-full rounded-xl border-[#E2DED9] text-sm text-[#3D3733] sm:w-[120px]">
                <SelectValue placeholder="Code">{selectedPhoneCountry?.dialCode}</SelectValue>
              </SelectTrigger>
              <SelectContent className="max-h-60">
                {phoneCountries.map((country) => (
                  <SelectItem key={country.code} value={country.code}>
                    {country.dialCode} · {country.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Input
              type="tel"
              inputMode="tel"
              placeholder="Phone number"
              value={form.phone.number}
              onChange={(event) => updatePhone({ number: event.target.value })}
              className="flex-1 rounded-xl border-[#E2DED9] text-sm text-[#3D3733] sm:min-w-[220px]"
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <p className="text-xs font-medium uppercase tracking-[0.22em] text-[#847E7A]">{servicesLabel}</p>
        <div className="grid gap-2 sm:grid-cols-2">
          {serviceOptions.map((service) => {
            const checked = form.services.includes(service.value)
            return (
              <label
                key={service.value}
                className={cn(
                  "flex cursor-pointer items-center gap-2 rounded-xl border border-[#E2DED9] bg-white px-3 py-2 text-sm font-medium text-[#3D3733] transition hover:border-[#D3CEC8]",
                  checked && "border-[#1E1A17] bg-[#1E1A17]/5",
                )}
              >
                <Checkbox
                  checked={checked}
                  onCheckedChange={() => toggleService(service.value)}
                  className="h-4 w-4 rounded-sm border-[#BDB6B1] data-[state=checked]:bg-[#1E1A17] data-[state=checked]:text-white"
                />
                {service.label}
              </label>
            )
          })}
        </div>
      </div>

      <div className="flex flex-col gap-1.5">
        <Label htmlFor="contact-budget" className="text-xs font-medium uppercase tracking-[0.22em] text-[#847E7A]">
          BUDGET
        </Label>
        <Select value={form.budget} onValueChange={(value) => updateField("budget", value)}>
          <SelectTrigger id="contact-budget" className="w-full rounded-xl border-[#E2DED9] text-sm text-[#3D3733] sm:max-w-[320px]">
            <SelectValue placeholder="Select..." />
          </SelectTrigger>
          <SelectContent>
            {budgetOptions.map((option) => (
              <SelectItem key={option.value} value={option.value}>
                {option.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="flex flex-col gap-1.5">
        <Label htmlFor="contact-details" className="text-xs font-medium uppercase tracking-[0.22em] text-[#847E7A]">
          PROJECT DETAILS
        </Label>
        <Textarea
          id="contact-details"
          placeholder="Share context, goals, timelines, or anything else you’d like us to know."
          value={form.message}
          onChange={(event) => updateField("message", event.target.value)}
          className="min-h-[120px] rounded-xl border-[#E2DED9] text-sm text-[#3D3733]"
        />
      </div>

      {status === "error" && error ? (
        <p className="rounded-xl bg-[#FEF1F1] px-3 py-2 text-sm text-[#B42318]">{error}</p>
      ) : null}
      {status === "success" ? (
        <p className="rounded-xl bg-[#F0FDF4] px-3 py-2 text-sm text-[#166534]">
          Thanks for reaching out! We’ll get back to you within one business day.
        </p>
      ) : null}

      <Button
        type="submit"
        disabled={status === "loading"}
        className="mt-2 inline-flex h-12 items-center justify-center rounded-full bg-[#1E1A17] text-sm font-semibold text-white shadow-[0px_12px_32px_rgba(30,26,23,0.26)] transition hover:bg-[#1E1A17]/90 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "loading" ? "Sending…" : "Send message"}
      </Button>
    </form>
  )
}
