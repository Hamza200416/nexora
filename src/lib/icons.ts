import {
  Zap, Shield, Brain, Globe, Bot, BarChart3, Plug, Users, Lock, Cpu,
  Twitter, Linkedin, Github, Mail, Phone, MapPin, CheckCircle2, ArrowRight,
  Star, Sparkles, type LucideIcon,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Zap, Shield, Brain, Globe, Bot, BarChart3, Plug, Users, Lock, Cpu,
  Twitter, Linkedin, Github, Mail, Phone, MapPin, CheckCircle2, ArrowRight,
  Star, Sparkles,
};

export function getIcon(name: string): LucideIcon {
  return iconMap[name] ?? Sparkles;
}
