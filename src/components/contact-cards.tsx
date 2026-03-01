"use client";

import * as React from "react";
import {
  Check,
  Copy,
  Github,
  Linkedin,
  Mail,
  Phone,
  ArrowUpRight,
} from "lucide-react";
import { toast } from "sonner";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

type CopyState = "idle" | "copied";

function CopyButton({
  value,
  label,
  className,
}: {
  value: string;
  label: string;
  className?: string;
}) {
  const [state, setState] = React.useState<CopyState>("idle");

  return (
    <Button
      type="button"
      variant="outline"
      size="icon"
      className={cn("shrink-0", className)}
      aria-label={`Copy ${label}`}
      onClick={async () => {
        try {
          await navigator.clipboard.writeText(value);
          setState("copied");
          toast.success(`${label} copied`);
          window.setTimeout(() => setState("idle"), 1200);
        } catch {
          toast.error("Could not copy. Please copy manually.");
        }
      }}
    >
      {state === "copied" ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
    </Button>
  );
}

export function ContactCards({
  email = "ahmedhkhawaja@gmail.com",
  phone = "+61 468 362 846",
  linkedinUrl = "https://www.linkedin.com/in/ahmed-hassan-khawaja-075bab330/",
  githubUrl = "https://github.com/Ahmedhkhawaja",
  className,
}: {
  email?: string;
  phone?: string;
  linkedinUrl?: string;
  githubUrl?: string;
  className?: string;
}) {
  return (
    <div className={cn("grid gap-4 sm:grid-cols-2 lg:grid-cols-4", className)}>
      <Card className="h-full rounded-2xl border-border/70 bg-card/80 py-0 gap-0">
        <CardContent className="flex h-full flex-col gap-3 p-5">
          <div className="flex items-center gap-2">
            <Linkedin className="h-4 w-4 text-primary" />
            <p className="font-medium">LinkedIn</p>
          </div>
          <p className="text-sm text-muted-foreground">
            Professional profile and experience.
          </p>
          <div className="mt-auto">
            <Button asChild className="w-full justify-between rounded-xl">
              <a href={linkedinUrl} target="_blank" rel="noreferrer">
                Open <ArrowUpRight className="h-4 w-4" />
              </a>
            </Button>
          </div>
        </CardContent>
      </Card>

      <Card className="h-full rounded-2xl border-border/70 bg-card/80 py-0 gap-0">
        <CardContent className="flex h-full flex-col gap-3 p-5">
          <div className="flex items-center gap-2">
            <Github className="h-4 w-4 text-primary" />
            <p className="font-medium">GitHub</p>
          </div>
          <p className="text-sm text-muted-foreground">Code, repos, and builds.</p>
          <div className="mt-auto">
            <Button
              asChild
              variant="secondary"
              className="w-full justify-between rounded-xl"
            >
              <a href={githubUrl} target="_blank" rel="noreferrer">
                View <ArrowUpRight className="h-4 w-4" />
              </a>
            </Button>
          </div>
        </CardContent>
      </Card>

      <Card className="h-full rounded-2xl border-border/70 bg-card/80 py-0 gap-0">
        <CardContent className="flex h-full flex-col gap-3 p-5">
          <div className="flex items-center gap-2">
            <Mail className="h-4 w-4 text-primary" />
            <p className="font-medium">Email</p>
          </div>
          <p className="text-sm text-muted-foreground break-all">{email}</p>
          <div className="mt-auto flex w-full items-center gap-2">
            <Button asChild className="flex-1 justify-between rounded-xl">
              <a href={`mailto:${email}`}>
                Email <ArrowUpRight className="h-4 w-4" />
              </a>
            </Button>
            <CopyButton value={email} label="email" />
          </div>
        </CardContent>
      </Card>

      <Card className="h-full rounded-2xl border-border/70 bg-card/80 py-0 gap-0">
        <CardContent className="flex h-full flex-col gap-3 p-5">
          <div className="flex items-center gap-2">
            <Phone className="h-4 w-4 text-primary" />
            <p className="font-medium">Phone</p>
          </div>
          <p className="text-sm text-muted-foreground">{phone}</p>
          <div className="mt-auto flex w-full items-center gap-2">
            <Button
              asChild
              variant="secondary"
              className="flex-1 justify-between rounded-xl"
            >
              <a href={`tel:${phone.replace(/\s+/g, "")}`}>
                Call <ArrowUpRight className="h-4 w-4" />
              </a>
            </Button>
            <CopyButton value={phone} label="phone" />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

