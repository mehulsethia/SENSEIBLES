"use client";

import { useMemo } from "react";
import { useFormState, useFormStatus } from "react-dom";

import {
  initialContactFormState,
  submitContactForm,
} from "@/app/actions/contact";

function FieldError({ message }: { message?: string }) {
  if (!message) return null;

  return <p className="text-xs text-rose-300">{message}</p>;
}

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className="inline-flex h-12 items-center justify-center rounded-full bg-sky-400 px-8 text-sm font-semibold uppercase tracking-[0.3em] text-slate-950 transition hover:bg-sky-300 disabled:cursor-not-allowed disabled:opacity-60"
    >
      {pending ? "Sending…" : "Send Message"}
    </button>
  );
}

export function ContactSection() {
  const [state, formAction] = useFormState(submitContactForm, initialContactFormState);

  const statusTone = useMemo(() => {
    if (state.status === "success") return "text-emerald-300";
    if (state.status === "error") return "text-rose-300";
    return "text-slate-300";
  }, [state.status]);

  return (
    <section
      id="contact"
      className="relative isolate overflow-hidden bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900 py-24 text-slate-100"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(56,189,248,0.18),transparent_55%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[conic-gradient(from_160deg_at_30%_70%,rgba(96,165,250,0.1),transparent_50%)]" />

      <div className="relative z-10 mx-auto flex w-full max-w-5xl flex-col gap-12 rounded-[36px] border border-white/10 bg-white/5 p-8 shadow-[0_0_80px_rgba(56,189,248,0.16)] backdrop-blur-xl md:flex-row md:gap-16 md:p-12">
        <div className="flex-1 space-y-6">
          <span className="text-xs uppercase tracking-[0.55em] text-sky-300/75">
            Book A Build Sprint
          </span>
          <h2 className="text-3xl font-semibold md:text-4xl">
            Tell us about the launch, and we will follow up with an interactive storyboard.
          </h2>
          <p className="text-sm text-slate-300 md:text-base">
            Share where you are in the process, timelines, and the type of assets you have. We reply within 24 hours with next steps and a private link to our coming-soon playground.
          </p>
          <div className="rounded-2xl border border-white/10 bg-slate-950/60 p-6 text-sm text-slate-300">
            <p className="font-medium text-white">Direct line</p>
            <p className="mt-2">sethiamehul14@gmail.com</p>
          </div>
        </div>

        <form
          action={formAction}
          className="flex-1 space-y-4"
          noValidate
        >
          <div className="space-y-2">
            <label className="block text-xs uppercase tracking-[0.35em] text-white/60" htmlFor="name">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              className="h-12 w-full rounded-xl border border-white/10 bg-slate-900/80 px-4 text-sm text-white outline-none transition placeholder:text-white/30 focus:border-sky-400"
              placeholder="Your name"
            />
            <FieldError message={state.errors?.name} />
          </div>

          <div className="space-y-2">
            <label className="block text-xs uppercase tracking-[0.35em] text-white/60" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              className="h-12 w-full rounded-xl border border-white/10 bg-slate-900/80 px-4 text-sm text-white outline-none transition placeholder:text-white/30 focus:border-sky-400"
              placeholder="you@company.com"
            />
            <FieldError message={state.errors?.email} />
          </div>

          <div className="space-y-2">
            <label className="block text-xs uppercase tracking-[0.35em] text-white/60" htmlFor="company">
              Company (optional)
            </label>
            <input
              id="company"
              name="company"
              type="text"
              className="h-12 w-full rounded-xl border border-white/10 bg-slate-900/80 px-4 text-sm text-white outline-none transition placeholder:text-white/30 focus:border-sky-400"
              placeholder="Studio, collective, or brand"
            />
            <FieldError message={state.errors?.company} />
          </div>

          <div className="space-y-2">
            <label className="block text-xs uppercase tracking-[0.35em] text-white/60" htmlFor="message">
              Project Notes
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              className="w-full rounded-xl border border-white/10 bg-slate-900/80 px-4 py-3 text-sm text-white outline-none transition placeholder:text-white/30 focus:border-sky-400"
              placeholder="Launch goals, timelines, references, budget signals…"
            />
            <FieldError message={state.errors?.message} />
          </div>

          <div className="flex flex-col gap-3 pt-2">
            <SubmitButton />
            <p aria-live="polite" className={`text-xs ${statusTone}`}>
              {state.message || "We respond within one business day."}
            </p>
          </div>
        </form>
      </div>
    </section>
  );
}

export default ContactSection;
