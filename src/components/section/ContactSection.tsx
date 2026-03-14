import { useState, type FormEvent } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "motion/react";

import { useIsMobile } from "@/hooks/use-mobile";
import { cn } from "@/lib/utils";
import GradientText from "../shared/GradientText";

import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import {
	Field,
	FieldContent,
	FieldError,
	FieldGroup,
	FieldTitle,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

type ContactFormState = {
	name: string;
	email: string;
	message: string;
};

type ContactFormErrors = Partial<Record<keyof ContactFormState, string>>;

type SubmitStatus =
	| { type: "idle" }
	| { type: "sending" }
	| { type: "success"; message: string }
	| { type: "error"; message: string };

export default function ContactSection() {
	const isMobile = useIsMobile();

	const [form, setForm] = useState<ContactFormState>({
		name: "",
		email: "",
		message: "",
	});
	const [errors, setErrors] = useState<ContactFormErrors>({});
	const [status, setStatus] = useState<SubmitStatus>({ type: "idle" });

	const isSending = status.type === "sending";

	function validate(next: ContactFormState): ContactFormErrors {
		const nextErrors: ContactFormErrors = {};

		if (!next.name.trim()) {
			nextErrors.name = "Please enter your name.";
		}

		if (!next.email.trim()) {
			nextErrors.email = "Please enter your email.";
		} else if (!/^\S+@\S+\.\S+$/.test(next.email.trim())) {
			nextErrors.email = "Please enter a valid email.";
		}

		if (!next.message.trim()) {
			nextErrors.message = "Please enter a message.";
		}

		return nextErrors;
	}

	async function onSubmit(e: FormEvent<HTMLFormElement>) {
		e.preventDefault();

		const nextErrors = validate(form);
		setErrors(nextErrors);
		setStatus({ type: "idle" });

		if (Object.keys(nextErrors).length > 0) {
			return;
		}

		const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
		const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
		const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

		if (!serviceId || !templateId || !publicKey) {
			setStatus({
				type: "error",
				message:
					"Email service is not configured. Add your EmailJS keys to a .env.local file and restart the dev server.",
			});
			return;
		}

		try {
			setStatus({ type: "sending" });

			await emailjs.send(
				serviceId,
				templateId,
				{
					from_name: form.name,
					from_email: form.email,
					message: form.message,
				},
				{ publicKey }
			);

			setForm({ name: "", email: "", message: "" });
			setErrors({});
			setStatus({
				type: "success",
				message: "Message sent! I’ll get back to you soon.",
			});
		} catch {
			setStatus({
				type: "error",
				message:
					"Something went wrong while sending. Please try again in a moment.",
			});
		}
	}

	return (
		<section
			id="contact"
			className="scroll-mt-10 md:scroll-mt-0 min-h-screen flex flex-col items-center justify-center gap-6 md:gap-12 py-6"
		>
			<div className="flex flex-col text-center items-center">
				<h2 className="text-3xl md:text-5xl">
					Contact <GradientText>Me</GradientText>
				</h2>
				<p className="text-sm md:text-[16px] text-slate-300 max-w-lg mt-4 leading-relaxed">
					Have a project in mind or just want to say hi? Fill out the
					form and I’ll reply to you by email.
				</p>
			</div>

			<motion.div
				initial={{ opacity: 0, y: 30, scale: 0.98 }}
				whileInView={{ opacity: 1, y: 0, scale: 1 }}
				viewport={{ once: true, amount: 0.2 }}
				transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
				className="w-full max-w-xl"
			>
				<Card className="ring-1 ring-primary/15 border border-zinc-800">
					<CardHeader>
						<CardTitle className="text-xl md:text-2xl font-bold">
							Send a Message
						</CardTitle>
						<CardDescription className="text-sm md:text-base">
							I usually respond within 24-48 hours.
						</CardDescription>
					</CardHeader>

					<CardContent>
						<form onSubmit={onSubmit} className="space-y-6">
							<FieldGroup>
								<Field data-invalid={!!errors.name}>
									<FieldContent>
										<FieldTitle>Name</FieldTitle>
										<Input
											value={form.name}
											onChange={(e) =>
												setForm((prev) => ({
													...prev,
													name: e.target.value,
												}))
											}
											onFocus={() =>
												setErrors((prev) => ({
													...prev,
													name: undefined,
												}))
											}
											placeholder="Your name"
											aria-invalid={!!errors.name}
											disabled={isSending}
											autoComplete="name"
										/>
										<FieldError>{errors.name}</FieldError>
									</FieldContent>
								</Field>

								<Field data-invalid={!!errors.email}>
									<FieldContent>
										<FieldTitle>Email</FieldTitle>
										<Input
											type="email"
											value={form.email}
											onChange={(e) =>
												setForm((prev) => ({
													...prev,
													email: e.target.value,
												}))
											}
											onFocus={() =>
												setErrors((prev) => ({
													...prev,
													email: undefined,
												}))
											}
											placeholder="you@example.com"
											aria-invalid={!!errors.email}
											disabled={isSending}
											autoComplete="email"
										/>
										<FieldError>{errors.email}</FieldError>
									</FieldContent>
								</Field>

								<Field data-invalid={!!errors.message}>
									<FieldContent>
										<FieldTitle>Message</FieldTitle>
										<Textarea
											value={form.message}
											onChange={(e) =>
												setForm((prev) => ({
													...prev,
													message: e.target.value,
												}))
											}
											onFocus={() =>
												setErrors((prev) => ({
													...prev,
													message: undefined,
												}))
											}
											placeholder="Tell me about something..."
											aria-invalid={!!errors.message}
											disabled={isSending}
											rows={6}
										/>
										<FieldError>{errors.message}</FieldError>
									</FieldContent>
								</Field>
							</FieldGroup>

							<div className="flex justify-end">
								<Button
									type="submit"
									size={isMobile ? "sm" : "lg"}
									disabled={isSending}
									className={cn(
										"font-bold text-primary border-primary cursor-pointer",
										"bg-transparent hover:bg-primary",
										"transition-all duration-300",
										"hover:shadow-[0_0_10px_0] shadow-primary",
										"hover:text-black border-primary"
									)}
								>
									{isSending ? "Sending..." : "Send"}
								</Button>
							</div>
						</form>
					</CardContent>

					<CardFooter className="border-t border-zinc-800">
						{status.type === "success" && (
							<p className="text-sm text-primary font-medium">
								{status.message}
							</p>
						)}
						{status.type === "error" && (
							<p className="text-sm text-destructive font-medium">
								{status.message}
							</p>
						)}
						{status.type === "idle" && (
							<p className="text-sm text-muted-foreground">
								Your message will be sent via EmailJS.
							</p>
						)}
						{status.type === "sending" && (
							<p className="text-sm text-muted-foreground">
								Sending your message...
							</p>
						)}
					</CardFooter>
				</Card>
			</motion.div>
		</section>
	);
}