// Modal Details Data
const cardDetails = {
  'isro-geomli': {
    title: 'ISRO GeoNLI - Applied AI Research',
    items: [
      '2-3x latency reduction via vLLM with KV caching and concurrent batching',
      'DPO-aligned Qwen3-VL-8B pipeline: 87% VQA accuracy on VRSBench (outperformed GPT-4o)',
      '0.73 mIoU score with FastAPI SAM3 Agent service using pyramidal tiling',
      '95% GPU utilization through optimized batching strategies',
      'Inter IIT Tech Meet 14.0 Gold Medal Achievement'
    ]
  },
  'stealth-startup': {
    title: 'Voice AI Observability Platform',
    items: [
      'Co-developed proprietary Voice AI observability platform MVP in stealth',
      'Engineered graph-based engine converting unstructured LLM prompts into executable test suites',
      '65% reduction in conversational AI QA cycles through automated testing',
      'Comprehensive metrics suite: latency, tone analysis, logic flow validation',
      'Deployed with Tier-1 enterprise clients (valuations $1B+)'
    ]
  },
  'convosight': {
    title: 'Convosight Analytics Platform',
    items: [
      'Migrated legacy workflows to high-performance React/Supabase architecture',
      '38% infrastructure cost reduction, 50% load time improvement',
      'ETL pipeline processing 10k+ daily posts with 92% sentiment accuracy via NLP',
      'Automated executive insight summarization: 70% manual work reduction',
      'Integrated fine-tuned GPT systems for cross-market trend detection'
    ]
  },
  'google-ambassador': {
    title: 'Google Student Ambassador',
    items: [
      'Leading AI awareness and adoption on campus',
      'Organized workshops on Gemini and AI innovations',
      'Collaborated with college festivals for AI demos',
      'Engaged students through hands-on demonstrations',
      'Bridge between Google and campus community',
      'Real-world leadership experience with industry experts'
    ]
  },
  'aristhrottle': {
    title: 'Aristhrottle Production Pipeline',
    items: [
      'Built production AI pipeline for automated story generation with visual coherence',
      'Integrated Google Imagen3 API with PostgreSQL for scalable content storage',
      'Engineered stochastic prompt selector with temperature scaling: 25% creative diversity increase',
      'Integrated LangFuse SDK for granular LangGraph execution tracing',
      'Implemented comprehensive token usage and latency monitoring'
    ]
  },
  'radagent': {
    title: 'RadAgent Research Paper',
    items: [
      'Multi-agent system for radiologist voice to structured medical reports',
      'Dual-track latency architecture: less than 300ms perceived latency',
      '94.2% clinical accuracy with hallucination-resistant guardrails',
      '100% HIPAA compliance via Microsoft Presidio PHI removal',
      'Deployed in hospital infrastructure on standard hardware',
      'Published: RadAgent - A Hallucination-Resistant Multi-Agent Copilot for Real-Time Radiology Dictation'
    ]
  },
  'veritas': {
    title: 'VERITAS - KDSH 2026 Winner',
    items: [
      '1st Prize Winner in Kharagpur Data Science Hackathon 2026 (6th Edition)',
      'Advanced NLP-based verification engine for fact-checking and reasoning',
      'Cross-document claim reasoning and assertion validation',
      'High accuracy on benchmark datasets for claim verification',
      'Integrated with RAG for evidence-based fact checking',
      'Outperformed competing solutions in both accuracy and innovation'
    ]
  },
  'employee-selection': {
    title: 'Employee Selection Engine',
    items: [
      '87% accuracy in at-risk employee identification',
      'Integrated 6 heterogeneous HR datasets with MICE imputation',
      'Custom Temporal Decay Algorithm for pattern analysis',
      '15% false positive reduction via prioritization',
      'AHP framework with CR less than 0.1 consistency validation',
      'Bronze winning team, Open Soft GC 2025'
    ]
  },
  'alphastream': {
    title: 'AlphaStream Real-Time Finance',
    items: [
      'Pathway streaming engine for real-time data pipeline',
      'Multi-agent reasoning: sentiment, technicals, risk, insider analysis',
      'Processes SEC EDGAR, News API, X data in parallel',
      'Sub-2-second recommendation turnaround with live updates',
      'Bloomberg-style React dashboard with WebSocket broadcasting',
      'Adaptive RAG for geometric context expansion'
    ]
  },
  'sam3': {
    title: 'SAM3 Agent Vision System',
    items: [
      'Object counting and area measurement with high precision',
      'Full image segmentation with detailed masks',
      'Oriented Bounding Box (OBB) detection',
      'VLM-verified results: 40-50% false positive reduction',
      'Efficient tiling and pyramidal processing for large images',
      'Warm container deployment: sub-second response times',
      'Docker-ready with Modal support for scalability'
    ]
  },
  'budget': {
    title: 'Budget Optimization GC 2025',
    items: [
      'Meta Robyn library for Marketing Mix Modeling',
      '$18.7M annual marketing budget optimization',
      '31.9% projected revenue uplift from reallocation',
      'Channel-wise budget recommendation framework',
      'Response decomposition waterfall analysis',
      'Bronze winning team, IIT Kharagpur'
    ]
  }
};

// Modal Management
const modal = document.getElementById('detailModal');
const closeBtn = document.querySelector('.modal-close');
const modalTitle = document.querySelector('.modal-title');
const modalDetail = document.querySelector('.modal-detail');

function openModal(cardId) {
  const details = cardDetails[cardId];
  if (!details) return;

  modalTitle.textContent = details.title;

  let html = '<h4>Details</h4><ul>';
  details.items.forEach(item => {
    html += `<li>${item}</li>`;
  });
  html += '</ul>';

  modalDetail.innerHTML = html;
  modal.classList.add('active');
}

function closeModal() {
  modal.classList.remove('active');
}

closeBtn.addEventListener('click', closeModal);
modal.addEventListener('click', (e) => {
  if (e.target === modal) {
    closeModal();
  }
});

// Keyboard navigation
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeModal();
  }
});

// Smooth scroll behavior
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});
