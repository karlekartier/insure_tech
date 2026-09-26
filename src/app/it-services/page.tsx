"use client";

import React from "react";
import { ServiceWebsiteLayout } from "@/components/ServiceWebsiteLayout";
import { ItServicesEstimator } from "@/components/estimators/ItServicesEstimator";
import {
  Cpu,
  Cloud,
  Code2,
  Shield,
  Terminal,
  Headphones,
  Zap,
  Server,
  Lock,
  Layers,
  Sparkles,
  Award,
  Clock,
  CheckCircle2,
} from "lucide-react";

export default function ItServicesPage() {
  return (
    <ServiceWebsiteLayout
      serviceId="it-services"
      themeColor="cyan"
      divisionTitle="All IT &amp; Cloud Services"
      divisionBadge="IT Services Division"
      divisionBadgeIcon={Cpu}
      compliancePill="ISO 27001 Certified • SOC 2 Ready • 99.99% Uptime SLA"
      heroHeadline="High-Performance Enterprise"
      heroHeadlineHighlight="IT &amp; Cloud Engineering"
      heroSubtitle="Accelerate digital transformation with modern cloud architecture, mission-critical cybersecurity, automated DevOps pipelines, and 24/7 managed infrastructure support."
      heroCtaText="Schedule Tech Discovery"
      heroSecondaryCtaText="Scope Your Project"
      heroStats={[
        { value: "99.99%", label: "Uptime SLA" },
        { value: "120+", label: "Projects Delivered" },
        { value: "<15 Min", label: "Critical Response" },
        { value: "24/7", label: "Managed NOC / SOC" },
      ]}
      capabilitiesTitle="Full-Spectrum IT &amp; Engineering Solutions"
      capabilitiesSubtitle="From ground-up web & mobile platforms to complex hybrid cloud migrations and enterprise security audits."
      capabilities={[
        {
          title: "Cloud Architecture & Migration",
          desc: "Architect, deploy, and optimize scalable workloads on AWS, Microsoft Azure, and Google Cloud with multi-region redundancy and FinOps cost governance.",
          icon: Cloud,
          tag: "Cloud Infrastructure",
          deliverables: [
            "Well-Architected Framework cloud assessment",
            "Zero-downtime database and container migration",
            "FinOps cloud spend reduction by 25-40%",
          ],
        },
        {
          title: "Custom Web & Mobile Development",
          desc: "Full-stack application engineering using React, Next.js, Node.js, Python, and React Native for responsive, high-performance digital products.",
          icon: Code2,
          tag: "Software Engineering",
          deliverables: [
            "Modular microservices & RESTful / GraphQL APIs",
            "Mobile apps for iOS & Android with offline sync",
            "Enterprise UX/UI design systems & component libraries",
          ],
        },
        {
          title: "Cybersecurity & VAPT Audits",
          desc: "Proactive penetration testing, vulnerability assessments, automated threat intelligence, and ISO 27001 / SOC 2 compliance readiness.",
          icon: Shield,
          tag: "Security & SOC",
          deliverables: [
            "Web app, mobile app & network penetration testing",
            "Endpoint Detection & Response (EDR) implementation",
            "Real-time Security Operations Center (SOC) monitoring",
          ],
        },
        {
          title: "DevOps CI/CD & Kubernetes",
          desc: "Automate build, test, and release cycles with Docker containerization, Kubernetes cluster orchestration, and GitOps workflows.",
          icon: Terminal,
          tag: "DevOps & SRE",
          deliverables: [
            "Automated zero-downtime deployment pipelines",
            "Infrastructure-as-Code (Terraform / CloudFormation)",
            "Prometheus & Grafana observability monitoring",
          ],
        },
        {
          title: "24/7 Managed IT Support & Helpdesk",
          desc: "Dedicated remote and on-site IT support for servers, networks, workstations, active directories, and employee onboarding.",
          icon: Headphones,
          tag: "Managed Support",
          deliverables: [
            "Tier 1 to Tier 3 IT technical support with strict SLAs",
            "Proactive workstation & server patch management",
            "Automated daily disaster recovery & backup audits",
          ],
        },
        {
          title: "AI, RPA & Workflow Modernization",
          desc: "Deploy intelligent automation, document parsing agents, custom LLM integrations, and predictive data pipelines that reduce operational costs.",
          icon: Sparkles,
          tag: "AI & Automation",
          deliverables: [
            "Robotic Process Automation (RPA) for repetitive tasks",
            "Secure enterprise generative AI & internal knowledge search",
            "Real-time executive BI dashboards and ETL pipelines",
          ],
        },
      ]}
      estimatorComponent={<ItServicesEstimator />}
      workflowTitle="Our Agile Engineering &amp; Delivery Lifecycle"
      workflowSubtitle="Iterative, transparent sprints backed by automated testing, continuous integration, and dedicated engineering leads."
      workflowSteps={[
        {
          step: "01",
          title: "Architecture Discovery",
          desc: "We analyze your technical requirements, security baselines, integrations, and deliver an interactive scope blueprint.",
        },
        {
          step: "02",
          title: "Sprint Planning & CI/CD",
          desc: "Two-week agile sprint cadences with automated test suites, pull request reviews, and continuous staging environments.",
        },
        {
          step: "03",
          title: "VAPT & Performance QA",
          desc: "Rigorous load testing, security vulnerability scans, and cross-platform browser/device compatibility checks.",
        },
        {
          step: "04",
          title: "Production Release & 24/7 SRE",
          desc: "Zero-downtime canary or blue-green production deployment with real-time alerting, logging, and SLA monitoring.",
        },
      ]}
      whyChooseUsTitle="Why Organizations Trust InsureTech IT Services"
      whyChooseUsSubtitle="Engineering precision, certified cloud architects, and round-the-clock reliability."
      whyChooseUsPoints={[
        {
          title: "Certified Cloud Architects",
          desc: "Our engineering leads hold AWS Solutions Architect, Azure Expert, and Google Cloud Professional certifications.",
          icon: Award,
        },
        {
          title: "99.99% Uptime Guarantee",
          desc: "We build fault-tolerant, self-healing cloud architectures backed by stringent financial uptime SLAs.",
          icon: Server,
        },
        {
          title: "Bank-Grade Cyber Defense",
          desc: "Strict adherence to OWASP Top 10 guidelines, encrypted data-at-rest/in-transit, and automated threat detection.",
          icon: Lock,
        },
        {
          title: "<15 Min Emergency Response",
          desc: "Our round-the-clock Site Reliability Engineers (SRE) triage critical production incidents within minutes.",
          icon: Clock,
        },
      ]}
      testimonialsTitle="Client Engineering Success Stories"
      testimonialsSubtitle="How we helped fintechs, logistics hubs, and global enterprises build scalable digital systems."
      testimonials={[
        {
          client: "Global Fintech Transact, Bangalore",
          industry: "Financial Services",
          quote:
            "InsureTech re-architected our legacy monolith into a resilient Kubernetes cluster on AWS. Our API latency dropped by 65% while handling 4x traffic.",
          result: "65% Latency Drop",
          author: "Arjun Venkat",
          role: "Chief Technology Officer",
        },
        {
          client: "Nexus Industrial Supply Chain",
          industry: "B2B Enterprise",
          quote:
            "Their cybersecurity audit identified critical vulnerabilities before our annual ISO 27001 re-certification. They remediated every issue in two weeks.",
          result: "100% ISO Audit Pass",
          author: "Deepika Sharma",
          role: "VP Information Security",
        },
        {
          client: "OmniHealth Telemedicine",
          industry: "Digital Health",
          quote:
            "From mobile apps to backend HIPAA-compliant database design, the InsureTech squad delivered our release three weeks ahead of schedule.",
          result: "Shipped 3 Wks Early",
          author: "Dr. K. Senthil",
          role: "Founder & CEO",
        },
      ]}
      faqs={[
        {
          q: "What engagement models do you offer for software development?",
          a: "We offer flexible models including Dedicated Squads (full-time agile teams of developers, QA, and architect), Fixed-Price Milestone Delivery (for projects with well-defined specs), and Time & Materials for evolving R&D initiatives.",
        },
        {
          q: "Can you manage our existing AWS or Azure cloud infrastructure?",
          a: "Yes. Our Cloud Managed Services team can audit, assume operational control of, and optimize your existing cloud environments, ensuring high availability, security hardening, and cost reduction.",
        },
        {
          q: "How do you guarantee source code ownership and IP protection?",
          a: "All source code, design assets, and intellectual property belong 100% to our clients from day one. We sign comprehensive Non-Disclosure Agreements (NDA) and IP assignment contracts before starting any engagement.",
        },
        {
          q: "Do you provide round-the-clock (24/7) monitoring and support?",
          a: "Yes. We offer Tier 1 through Tier 3 24/7/365 infrastructure monitoring with guaranteed response times of less than 15 minutes for critical severity-1 incidents.",
        },
        {
          q: "What tech stack do you recommend for high-performance web applications?",
          a: "We frequently build with Next.js / React with TypeScript on the frontend, Node.js or Python (FastAPI/Django) on the backend, PostgreSQL/Redis for data, and containerized Docker deployments orchestrated via Kubernetes or AWS ECS.",
        },
      ]}
      contactPreselectedService="IT Services & Cloud Architecture"
    />
  );
}
