import type { Metrics } from "@models/Post";

import { BsClock, BsCalendar } from "react-icons/bs/index.js";

import { formatDate } from "src/utils";

import "./MetricPost.css";

type Props = {
  metrics: Metrics;
  className?: string | "";
};

export default function MetricPost({ metrics, className }: Props) {
  return (
    <footer
      className={`footer-metrics ${className}`}
      aria-label="Footer metrics post"
    >
      <div className="footer-metrics__reading-time item">
        <span>{<BsClock className="footer-metrics__icone" />}</span>
        <span>{metrics.readingTime} min</span>
      </div>
      <div className="footer-metrics__date item">
        <span>{<BsCalendar className="footer-metrics__icone" />}</span>
        <span>
          {metrics.updateAt
            ? formatDate(metrics.updateAt)
            : formatDate(metrics.createAt)}
        </span>
      </div>
    </footer>
  );
}
