export function ConnectionTopologySvg() {
  return (
    <svg viewBox="0 0 360 380" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <g fill="none">
        <circle cx="180" cy="190" r="28" fill="#00d9a6" fillOpacity=".10" stroke="#00d9a6" strokeOpacity=".4" strokeWidth="1.5"></circle>
        <circle cx="180" cy="190" r="48" fill="none" stroke="#00d9a6" strokeOpacity=".12" strokeWidth="1" strokeDasharray="4,4"></circle>
        <circle cx="180" cy="190" r="76" fill="none" stroke="#00d9a6" strokeOpacity=".07" strokeWidth="1"></circle>
        <line x1="180" y1="162" x2="180" y2="96" stroke="#00d9a6" strokeOpacity=".25" strokeWidth="1" strokeDasharray="4,3"></line>
        <line x1="206" y1="201" x2="264" y2="242" stroke="#00d9a6" strokeOpacity=".25" strokeWidth="1" strokeDasharray="4,3"></line>
        <line x1="154" y1="201" x2="96" y2="242" stroke="#00d9a6" strokeOpacity=".25" strokeWidth="1" strokeDasharray="4,3"></line>
        <line x1="197" y1="168" x2="252" y2="124" stroke="#4f9ef8" strokeOpacity=".22" strokeWidth="1" strokeDasharray="4,3"></line>
        <line x1="163" y1="168" x2="108" y2="124" stroke="#4f9ef8" strokeOpacity=".22" strokeWidth="1" strokeDasharray="4,3"></line>
        <circle cx="180" cy="82" r="14" fill="#00d9a6" fillOpacity=".12" stroke="#00d9a6" strokeOpacity=".45" strokeWidth="1.5"></circle>
        <circle cx="272" cy="254" r="14" fill="#00d9a6" fillOpacity=".12" stroke="#00d9a6" strokeOpacity=".45" strokeWidth="1.5"></circle>
        <circle cx="88" cy="254" r="14" fill="#00d9a6" fillOpacity=".12" stroke="#00d9a6" strokeOpacity=".45" strokeWidth="1.5"></circle>
        <circle cx="262" cy="114" r="11" fill="#4f9ef8" fillOpacity=".10" stroke="#4f9ef8" strokeOpacity=".4" strokeWidth="1.5"></circle>
        <circle cx="98" cy="114" r="11" fill="#4f9ef8" fillOpacity=".10" stroke="#4f9ef8" strokeOpacity=".4" strokeWidth="1.5"></circle>
        <text x="152" y="79" fill="#00d9a6" fillOpacity=".5" fontSize="9" fontFamily="monospace">postgres</text>
        <text x="284" y="258" fill="#00d9a6" fillOpacity=".5" fontSize="9" fontFamily="monospace">mongodb</text>
        <text x="44" y="258" fill="#00d9a6" fillOpacity=".5" fontSize="9" fontFamily="monospace">elastic</text>
        <text x="270" y="112" fill="#4f9ef8" fillOpacity=".45" fontSize="9" fontFamily="monospace">redis</text>
        <text x="64" y="112" fill="#4f9ef8" fillOpacity=".45" fontSize="9" fontFamily="monospace">pool</text>
        <text x="162" y="196" fill="#00d9a6" fillOpacity=".7" fontSize="10" fontFamily="monospace">registry</text>
      </g>
    </svg>
  );
}

export function KafkaStreamingSvg() {
  return (
    <svg viewBox="0 0 360 380" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <g fill="none">
        <rect x="40" y="52" width="75" height="24" fill="#00d9a6" fillOpacity=".09" stroke="#00d9a6" strokeOpacity=".3" strokeWidth="1"></rect>
        <rect x="143" y="52" width="75" height="24" fill="#00d9a6" fillOpacity=".09" stroke="#00d9a6" strokeOpacity=".3" strokeWidth="1"></rect>
        <rect x="246" y="52" width="75" height="24" fill="#00d9a6" fillOpacity=".09" stroke="#00d9a6" strokeOpacity=".3" strokeWidth="1"></rect>
        <text x="58" y="68" fill="#00d9a6" fillOpacity=".5" fontSize="9" fontFamily="monospace">partition_0</text>
        <text x="161" y="68" fill="#00d9a6" fillOpacity=".5" fontSize="9" fontFamily="monospace">partition_1</text>
        <text x="264" y="68" fill="#00d9a6" fillOpacity=".5" fontSize="9" fontFamily="monospace">partition_2</text>
        <path d="M0 175 Q45 145 90 175 Q135 205 180 175 Q225 145 270 175 Q315 205 360 175" stroke="#00d9a6" strokeOpacity=".38" strokeWidth="2"></path>
        <path d="M0 210 Q45 180 90 210 Q135 240 180 210 Q225 180 270 210 Q315 240 360 210" stroke="#00d9a6" strokeOpacity=".20" strokeWidth="1.5"></path>
        <path d="M0 245 Q45 215 90 245 Q135 275 180 245 Q225 215 270 245 Q315 275 360 245" stroke="#00d9a6" strokeOpacity=".10" strokeWidth="1"></path>
        <path d="M0 140 Q45 110 90 140 Q135 170 180 140 Q225 110 270 140 Q315 170 360 140" stroke="#4f9ef8" strokeOpacity=".18" strokeWidth="1" strokeDasharray="3,5"></path>
        <text x="24" y="318" fill="#00d9a6" fillOpacity=".4" fontSize="9" fontFamily="monospace">twitter/x</text>
        <text x="148" y="318" fill="#00d9a6" fillOpacity=".4" fontSize="9" fontFamily="monospace">instagram</text>
        <text x="268" y="318" fill="#00d9a6" fillOpacity=".4" fontSize="9" fontFamily="monospace">web_scrape</text>
        <line x1="52" y1="305" x2="52" y2="76" stroke="#00d9a6" strokeOpacity=".08" strokeWidth="1" strokeDasharray="2,5"></line>
        <line x1="180" y1="305" x2="180" y2="76" stroke="#00d9a6" strokeOpacity=".08" strokeWidth="1" strokeDasharray="2,5"></line>
        <line x1="308" y1="305" x2="308" y2="76" stroke="#00d9a6" strokeOpacity=".08" strokeWidth="1" strokeDasharray="2,5"></line>
      </g>
    </svg>
  );
}

export function CredentialVaultSvg() {
  return (
    <svg viewBox="0 0 360 380" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <g fill="none">
        <rect x="130" y="150" width="100" height="80" rx="8" fill="#00d9a6" fillOpacity=".10" stroke="#00d9a6" strokeOpacity=".45" strokeWidth="1.5"></rect>
        <circle cx="180" cy="180" r="11" fill="none" stroke="#00d9a6" strokeOpacity=".5" strokeWidth="1.5"></circle>
        <rect x="176" y="188" width="8" height="14" fill="#00d9a6" fillOpacity=".4"></rect>
        <text x="148" y="246" fill="#00d9a6" fillOpacity=".6" fontSize="9" fontFamily="monospace">credential_hub</text>

        <line x1="180" y1="150" x2="180" y2="92" stroke="#00d9a6" strokeOpacity=".22" strokeWidth="1" strokeDasharray="4,3"></line>
        <line x1="130" y1="180" x2="64" y2="148" stroke="#4f9ef8" strokeOpacity=".2" strokeWidth="1" strokeDasharray="4,3"></line>
        <line x1="230" y1="180" x2="296" y2="148" stroke="#4f9ef8" strokeOpacity=".2" strokeWidth="1" strokeDasharray="4,3"></line>
        <line x1="160" y1="230" x2="100" y2="290" stroke="#00d9a6" strokeOpacity=".2" strokeWidth="1" strokeDasharray="4,3"></line>
        <line x1="200" y1="230" x2="260" y2="290" stroke="#00d9a6" strokeOpacity=".2" strokeWidth="1" strokeDasharray="4,3"></line>

        <rect x="128" y="56" width="104" height="30" rx="6" fill="#00d9a6" fillOpacity=".08" stroke="#00d9a6" strokeOpacity=".3" strokeWidth="1"></rect>
        <text x="144" y="76" fill="#00d9a6" fillOpacity=".55" fontSize="9" fontFamily="monospace">rapidapi_keys</text>

        <rect x="20" y="116" width="92" height="30" rx="6" fill="#4f9ef8" fillOpacity=".08" stroke="#4f9ef8" strokeOpacity=".3" strokeWidth="1"></rect>
        <text x="32" y="136" fill="#4f9ef8" fillOpacity=".55" fontSize="9" fontFamily="monospace">social_accounts</text>

        <rect x="252" y="116" width="86" height="30" rx="6" fill="#4f9ef8" fillOpacity=".08" stroke="#4f9ef8" strokeOpacity=".3" strokeWidth="1"></rect>
        <text x="266" y="136" fill="#4f9ef8" fillOpacity=".55" fontSize="9" fontFamily="monospace">infisical</text>

        <rect x="46" y="290" width="100" height="30" rx="6" fill="#00d9a6" fillOpacity=".08" stroke="#00d9a6" strokeOpacity=".3" strokeWidth="1"></rect>
        <text x="58" y="310" fill="#00d9a6" fillOpacity=".55" fontSize="9" fontFamily="monospace">agent_code_v3</text>

        <rect x="216" y="290" width="84" height="30" rx="6" fill="#00d9a6" fillOpacity=".08" stroke="#00d9a6" strokeOpacity=".3" strokeWidth="1"></rect>
        <text x="230" y="310" fill="#00d9a6" fillOpacity=".55" fontSize="9" fontFamily="monospace">token_usage</text>

        <circle cx="180" cy="180" r="58" fill="none" stroke="#00d9a6" strokeOpacity=".08" strokeWidth="1" strokeDasharray="3,5"></circle>
      </g>
    </svg>
  );
}

export function AgentPipelineSvg() {
  return (
    <svg viewBox="0 0 360 380" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <g fill="none">
        <rect x="16" y="40" width="68" height="26" rx="5" fill="#4f9ef8" fillOpacity=".10" stroke="#4f9ef8" strokeOpacity=".4" strokeWidth="1.5"></rect>
        <text x="26" y="57" fill="#4f9ef8" fillOpacity=".6" fontSize="9" fontFamily="monospace">rust pusher</text>

        <line x1="84" y1="53" x2="140" y2="53" stroke="#4f9ef8" strokeOpacity=".3" strokeWidth="1" strokeDasharray="3,3"></line>
        <polygon points="138,49 146,53 138,57" fill="#4f9ef8" fillOpacity=".5" stroke="none"></polygon>

        <rect x="148" y="40" width="92" height="26" rx="5" fill="#00d9a6" fillOpacity=".09" stroke="#00d9a6" strokeOpacity=".35" strokeWidth="1"></rect>
        <text x="158" y="57" fill="#00d9a6" fillOpacity=".55" fontSize="9" fontFamily="monospace">redis queue</text>

        <line x1="194" y1="66" x2="194" y2="96" stroke="#00d9a6" strokeOpacity=".25" strokeWidth="1" strokeDasharray="3,3"></line>
        <polygon points="190,94 194,102 198,94" fill="#00d9a6" fillOpacity=".45" stroke="none"></polygon>

        <circle cx="194" cy="150" r="46" fill="none" stroke="#00d9a6" strokeOpacity=".10" strokeWidth="1" strokeDasharray="4,4"></circle>
        <text x="160" y="153" fill="#00d9a6" fillOpacity=".65" fontSize="10" fontFamily="monospace">agent loop</text>

        <circle cx="120" cy="120" r="22" fill="#4f9ef8" fillOpacity=".10" stroke="#4f9ef8" strokeOpacity=".42" strokeWidth="1.5"></circle>
        <text x="103" y="124" fill="#4f9ef8" fillOpacity=".7" fontSize="8" fontFamily="monospace">regex</text>

        <circle cx="194" cy="98" r="22" fill="#00d9a6" fillOpacity=".10" stroke="#00d9a6" strokeOpacity=".42" strokeWidth="1.5"></circle>
        <text x="174" y="102" fill="#00d9a6" fillOpacity=".7" fontSize="8" fontFamily="monospace">dom-llm</text>

        <circle cx="268" cy="120" r="22" fill="#00d9a6" fillOpacity=".14" stroke="#00d9a6" strokeOpacity=".5" strokeWidth="1.5"></circle>
        <text x="246" y="124" fill="#00d9a6" fillOpacity=".75" fontSize="8" fontFamily="monospace">codegen</text>

        <circle cx="230" cy="186" r="18" fill="#4f9ef8" fillOpacity=".08" stroke="#4f9ef8" strokeOpacity=".35" strokeWidth="1.5" strokeDasharray="2,3"></circle>
        <text x="206" y="190" fill="#4f9ef8" fillOpacity=".6" fontSize="7" fontFamily="monospace">repair</text>

        <line x1="138" y1="128" x2="172" y2="108" stroke="#fff" strokeOpacity=".08" strokeWidth="1"></line>
        <line x1="216" y1="108" x2="250" y2="120" stroke="#fff" strokeOpacity=".08" strokeWidth="1"></line>
        <line x1="252" y1="138" x2="240" y2="170" stroke="#fff" strokeOpacity=".08" strokeWidth="1"></line>

        <line x1="194" y1="196" x2="194" y2="232" stroke="#00d9a6" strokeOpacity=".25" strokeWidth="1" strokeDasharray="3,3"></line>
        <polygon points="190,230 194,238 198,230" fill="#00d9a6" fillOpacity=".45" stroke="none"></polygon>

        <rect x="100" y="244" width="80" height="26" rx="5" fill="#00d9a6" fillOpacity=".08" stroke="#00d9a6" strokeOpacity=".3" strokeWidth="1"></rect>
        <text x="112" y="261" fill="#00d9a6" fillOpacity=".55" fontSize="9" fontFamily="monospace">_extract()</text>

        <rect x="196" y="244" width="76" height="26" rx="5" fill="#4f9ef8" fillOpacity=".08" stroke="#4f9ef8" strokeOpacity=".3" strokeWidth="1"></rect>
        <text x="206" y="261" fill="#4f9ef8" fillOpacity=".55" fontSize="9" fontFamily="monospace">s3 archive</text>

        <line x1="140" y1="270" x2="140" y2="300" stroke="#00d9a6" strokeOpacity=".2" strokeWidth="1" strokeDasharray="3,3"></line>
        <polygon points="136,298 140,306 144,298" fill="#00d9a6" fillOpacity=".4" stroke="none"></polygon>

        <rect x="80" y="312" width="120" height="26" rx="5" fill="#00d9a6" fillOpacity=".10" stroke="#00d9a6" strokeOpacity=".4" strokeWidth="1.5"></rect>
        <text x="98" y="329" fill="#00d9a6" fillOpacity=".65" fontSize="9" fontFamily="monospace">→ kafka topic</text>
      </g>
    </svg>
  );
}

export function KeywordFanoutSvg() {
  return (
    <svg viewBox="0 0 360 380" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <g fill="none">
        <rect x="130" y="20" width="100" height="28" rx="6" fill="#4f9ef8" fillOpacity=".10" stroke="#4f9ef8" strokeOpacity=".4" strokeWidth="1.5"></rect>
        <text x="146" y="38" fill="#4f9ef8" fillOpacity=".6" fontSize="9" fontFamily="monospace">brief / topic</text>

        <line x1="180" y1="48" x2="180" y2="70" stroke="#4f9ef8" strokeOpacity=".25" strokeWidth="1" strokeDasharray="3,3"></line>

        <rect x="120" y="72" width="120" height="26" rx="5" fill="#00d9a6" fillOpacity=".09" stroke="#00d9a6" strokeOpacity=".35" strokeWidth="1"></rect>
        <text x="132" y="89" fill="#00d9a6" fillOpacity=".6" fontSize="9" fontFamily="monospace">query-constructor</text>

        <line x1="180" y1="98" x2="180" y2="120" stroke="#00d9a6" strokeOpacity=".25" strokeWidth="1" strokeDasharray="3,3"></line>

        <rect x="112" y="122" width="136" height="26" rx="5" fill="#00d9a6" fillOpacity=".12" stroke="#00d9a6" strokeOpacity=".45" strokeWidth="1.5"></rect>
        <text x="124" y="139" fill="#00d9a6" fillOpacity=".7" fontSize="9" fontFamily="monospace">keyword-generator ×6</text>

        <line x1="180" y1="148" x2="180" y2="168" stroke="#00d9a6" strokeOpacity=".2" strokeWidth="1" strokeDasharray="3,3"></line>

        <circle cx="180" cy="168" r="3" fill="#00d9a6" fillOpacity=".5"></circle>

        <line x1="180" y1="168" x2="62" y2="210" stroke="#00d9a6" strokeOpacity=".18" strokeWidth="1"></line>
        <line x1="180" y1="168" x2="116" y2="210" stroke="#00d9a6" strokeOpacity=".18" strokeWidth="1"></line>
        <line x1="180" y1="168" x2="170" y2="210" stroke="#00d9a6" strokeOpacity=".18" strokeWidth="1"></line>
        <line x1="180" y1="168" x2="224" y2="210" stroke="#00d9a6" strokeOpacity=".18" strokeWidth="1"></line>
        <line x1="180" y1="168" x2="278" y2="210" stroke="#00d9a6" strokeOpacity=".18" strokeWidth="1"></line>
        <line x1="180" y1="168" x2="298" y2="210" stroke="#00d9a6" strokeOpacity=".18" strokeWidth="1"></line>

        <rect x="36" y="212" width="52" height="22" rx="4" fill="#4f9ef8" fillOpacity=".08" stroke="#4f9ef8" strokeOpacity=".3" strokeWidth="1"></rect>
        <text x="44" y="227" fill="#4f9ef8" fillOpacity=".55" fontSize="7" fontFamily="monospace">twitter</text>

        <rect x="92" y="212" width="56" height="22" rx="4" fill="#4f9ef8" fillOpacity=".08" stroke="#4f9ef8" strokeOpacity=".3" strokeWidth="1"></rect>
        <text x="98" y="227" fill="#4f9ef8" fillOpacity=".55" fontSize="7" fontFamily="monospace">instagram</text>

        <rect x="150" y="212" width="44" height="22" rx="4" fill="#4f9ef8" fillOpacity=".08" stroke="#4f9ef8" strokeOpacity=".3" strokeWidth="1"></rect>
        <text x="156" y="227" fill="#4f9ef8" fillOpacity=".55" fontSize="7" fontFamily="monospace">tiktok</text>

        <rect x="196" y="212" width="50" height="22" rx="4" fill="#4f9ef8" fillOpacity=".08" stroke="#4f9ef8" strokeOpacity=".3" strokeWidth="1"></rect>
        <text x="201" y="227" fill="#4f9ef8" fillOpacity=".55" fontSize="7" fontFamily="monospace">youtube</text>

        <rect x="248" y="212" width="58" height="22" rx="4" fill="#4f9ef8" fillOpacity=".08" stroke="#4f9ef8" strokeOpacity=".3" strokeWidth="1"></rect>
        <text x="253" y="227" fill="#4f9ef8" fillOpacity=".55" fontSize="7" fontFamily="monospace">facebook</text>

        <rect x="276" y="212" width="48" height="22" rx="4" fill="#4f9ef8" fillOpacity=".08" stroke="#4f9ef8" strokeOpacity=".3" strokeWidth="1"></rect>
        <text x="282" y="227" fill="#4f9ef8" fillOpacity=".55" fontSize="7" fontFamily="monospace">threads</text>

        <rect x="60" y="268" width="120" height="26" rx="5" fill="#00d9a6" fillOpacity=".08" stroke="#00d9a6" strokeOpacity=".3" strokeWidth="1"></rect>
        <text x="68" y="285" fill="#00d9a6" fillOpacity=".55" fontSize="9" fontFamily="monospace">entity-assessor</text>

        <rect x="196" y="268" width="104" height="26" rx="5" fill="#00d9a6" fillOpacity=".08" stroke="#00d9a6" strokeOpacity=".3" strokeWidth="1"></rect>
        <text x="206" y="285" fill="#00d9a6" fillOpacity=".55" fontSize="9" fontFamily="monospace">rapidfuzz dedup</text>

        <line x1="120" y1="234" x2="120" y2="266" stroke="#00d9a6" strokeOpacity=".15" strokeWidth="1" strokeDasharray="3,3"></line>
        <line x1="240" y1="234" x2="248" y2="266" stroke="#00d9a6" strokeOpacity=".15" strokeWidth="1" strokeDasharray="3,3"></line>

        <line x1="180" y1="294" x2="180" y2="316" stroke="#00d9a6" strokeOpacity=".25" strokeWidth="1" strokeDasharray="3,3"></line>

        <rect x="90" y="318" width="180" height="28" rx="6" fill="#00d9a6" fillOpacity=".10" stroke="#00d9a6" strokeOpacity=".4" strokeWidth="1.5"></rect>
        <text x="100" y="336" fill="#00d9a6" fillOpacity=".65" fontSize="9" fontFamily="monospace">→ kafka acis-queue-object</text>
      </g>
    </svg>
  );
}

export function LifecycleSchedulerSvg() {
  return (
    <svg viewBox="0 0 360 380" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <g fill="none">
        <rect x="36" y="30" width="80" height="24" rx="5" fill="#4f9ef8" fillOpacity=".09" stroke="#4f9ef8" strokeOpacity=".35" strokeWidth="1"></rect>
        <text x="46" y="47" fill="#4f9ef8" fillOpacity=".55" fontSize="8" fontFamily="monospace">client A · HOT</text>

        <rect x="244" y="30" width="84" height="24" rx="5" fill="#4f9ef8" fillOpacity=".09" stroke="#4f9ef8" strokeOpacity=".35" strokeWidth="1"></rect>
        <text x="252" y="47" fill="#4f9ef8" fillOpacity=".55" fontSize="8" fontFamily="monospace">client B · COLD</text>

        <line x1="76" y1="54" x2="160" y2="96" stroke="#4f9ef8" strokeOpacity=".2" strokeWidth="1" strokeDasharray="3,3"></line>
        <line x1="286" y1="54" x2="200" y2="96" stroke="#4f9ef8" strokeOpacity=".2" strokeWidth="1" strokeDasharray="3,3"></line>

        <circle cx="180" cy="130" r="44" fill="none" stroke="#00d9a6" strokeOpacity=".1" strokeWidth="1" strokeDasharray="4,4"></circle>
        <text x="146" y="125" fill="#00d9a6" fillOpacity=".65" fontSize="9" fontFamily="monospace">fastest-wins</text>
        <text x="150" y="139" fill="#00d9a6" fillOpacity=".5" fontSize="8" fontFamily="monospace">scheduler</text>

        <line x1="180" y1="174" x2="180" y2="200" stroke="#00d9a6" strokeOpacity=".25" strokeWidth="1" strokeDasharray="3,3"></line>
        <polygon points="176,198 180,206 184,198" fill="#00d9a6" fillOpacity=".45" stroke="none"></polygon>

        <rect x="108" y="208" width="144" height="26" rx="5" fill="#00d9a6" fillOpacity=".1" stroke="#00d9a6" strokeOpacity=".4" strokeWidth="1.5"></rect>
        <text x="118" y="225" fill="#00d9a6" fillOpacity=".65" fontSize="9" fontFamily="monospace">→ acis-job-interval</text>

        <line x1="180" y1="234" x2="180" y2="256" stroke="#00d9a6" strokeOpacity=".2" strokeWidth="1" strokeDasharray="3,3"></line>

        <rect x="124" y="258" width="112" height="24" rx="5" fill="#4f9ef8" fillOpacity=".08" stroke="#4f9ef8" strokeOpacity=".3" strokeWidth="1"></rect>
        <text x="134" y="274" fill="#4f9ef8" fillOpacity=".55" fontSize="8" fontFamily="monospace">crawler signal</text>

        <line x1="180" y1="282" x2="180" y2="302" stroke="#00d9a6" strokeOpacity=".18" strokeWidth="1" strokeDasharray="3,3"></line>

        <rect x="90" y="304" width="180" height="24" rx="5" fill="#00d9a6" fillOpacity=".07" stroke="#00d9a6" strokeOpacity=".28" strokeWidth="1"></rect>
        <text x="98" y="320" fill="#00d9a6" fillOpacity=".5" fontSize="8" fontFamily="monospace">PG LISTEN/NOTIFY · lifecycle_changed</text>

        <path d="M 270 316 Q 320 280 320 130 Q 320 70 224 47" stroke="#00d9a6" strokeOpacity=".15" strokeWidth="1" strokeDasharray="2,4"></path>
        <polygon points="220,42 228,47 222,53" fill="#00d9a6" fillOpacity=".3" stroke="none"></polygon>

        <circle cx="60" cy="130" r="3" fill="#4f9ef8" fillOpacity=".4"></circle>
        <circle cx="60" cy="150" r="3" fill="#4f9ef8" fillOpacity=".3"></circle>
        <text x="20" y="172" fill="#4f9ef8" fillOpacity=".4" fontSize="7" fontFamily="monospace">TRIAL</text>
        <text x="20" y="184" fill="#4f9ef8" fillOpacity=".4" fontSize="7" fontFamily="monospace">DORMANT</text>
      </g>
    </svg>
  );
}

export function YoutubeCrawlerSvg() {
  return (
    <svg viewBox="0 0 360 380" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <g fill="none">
        <rect x="20" y="34" width="92" height="26" rx="5" fill="#4f9ef8" fillOpacity=".09" stroke="#4f9ef8" strokeOpacity=".35" strokeWidth="1"></rect>
        <text x="30" y="51" fill="#4f9ef8" fillOpacity=".55" fontSize="8" fontFamily="monospace">keyword search</text>

        <rect x="244" y="34" width="96" height="26" rx="5" fill="#4f9ef8" fillOpacity=".09" stroke="#4f9ef8" strokeOpacity=".35" strokeWidth="1"></rect>
        <text x="254" y="51" fill="#4f9ef8" fillOpacity=".55" fontSize="8" fontFamily="monospace">channel videos</text>

        <line x1="66" y1="60" x2="140" y2="98" stroke="#4f9ef8" strokeOpacity=".2" strokeWidth="1" strokeDasharray="3,3"></line>
        <line x1="292" y1="60" x2="220" y2="98" stroke="#4f9ef8" strokeOpacity=".2" strokeWidth="1" strokeDasharray="3,3"></line>

        <rect x="118" y="100" width="124" height="28" rx="5" fill="#00d9a6" fillOpacity=".1" stroke="#00d9a6" strokeOpacity=".4" strokeWidth="1.5"></rect>
        <text x="126" y="118" fill="#00d9a6" fillOpacity=".65" fontSize="9" fontFamily="monospace">youtube data api v3</text>

        <line x1="180" y1="128" x2="180" y2="150" stroke="#00d9a6" strokeOpacity=".25" strokeWidth="1" strokeDasharray="3,3"></line>
        <polygon points="176,148 180,156 184,148" fill="#00d9a6" fillOpacity=".4" stroke="none"></polygon>

        <circle cx="180" cy="186" r="34" fill="none" stroke="#00d9a6" strokeOpacity=".12" strokeWidth="1" strokeDasharray="4,4"></circle>
        <circle cx="180" cy="186" r="12" fill="#00d9a6" fillOpacity=".1" stroke="#00d9a6" strokeOpacity=".4" strokeWidth="1.5"></circle>
        <text x="148" y="218" fill="#00d9a6" fillOpacity=".55" fontSize="8" fontFamily="monospace">credential hub</text>
        <text x="150" y="230" fill="#00d9a6" fillOpacity=".4" fontSize="7" fontFamily="monospace">checkout / release</text>

        <line x1="146" y1="186" x2="86" y2="186" stroke="#4f9ef8" strokeOpacity=".18" strokeWidth="1" strokeDasharray="2,4"></line>
        <text x="22" y="182" fill="#4f9ef8" fillOpacity=".4" fontSize="7" fontFamily="monospace">429 →</text>
        <text x="18" y="194" fill="#4f9ef8" fillOpacity=".4" fontSize="7" fontFamily="monospace">suspend</text>

        <line x1="180" y1="244" x2="180" y2="266" stroke="#00d9a6" strokeOpacity=".2" strokeWidth="1" strokeDasharray="3,3"></line>

        <rect x="120" y="268" width="120" height="24" rx="5" fill="#4f9ef8" fillOpacity=".08" stroke="#4f9ef8" strokeOpacity=".3" strokeWidth="1"></rect>
        <text x="128" y="284" fill="#4f9ef8" fillOpacity=".55" fontSize="8" fontFamily="monospace">redis video dedup</text>

        <line x1="180" y1="292" x2="180" y2="312" stroke="#00d9a6" strokeOpacity=".18" strokeWidth="1" strokeDasharray="3,3"></line>

        <rect x="86" y="314" width="188" height="26" rx="5" fill="#00d9a6" fillOpacity=".08" stroke="#00d9a6" strokeOpacity=".32" strokeWidth="1"></rect>
        <text x="94" y="331" fill="#00d9a6" fillOpacity=".55" fontSize="9" fontFamily="monospace">→ kafka acis-crawling-youtube</text>
      </g>
    </svg>
  );
}

export function PlaywrightBrowserSvg() {
  return (
    <svg viewBox="0 0 360 380" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <g fill="none">
        <rect x="60" y="32" width="240" height="150" rx="8" fill="#00d9a6" fillOpacity=".05" stroke="#00d9a6" strokeOpacity=".3" strokeWidth="1.5"></rect>
        <rect x="60" y="32" width="240" height="22" rx="8" fill="#00d9a6" fillOpacity=".09" stroke="#00d9a6" strokeOpacity=".3" strokeWidth="1"></rect>
        <circle cx="74" cy="43" r="3" fill="#4f9ef8" fillOpacity=".4"></circle>
        <circle cx="86" cy="43" r="3" fill="#4f9ef8" fillOpacity=".3"></circle>
        <circle cx="98" cy="43" r="3" fill="#00d9a6" fillOpacity=".4"></circle>
        <text x="184" y="48" fill="#00d9a6" fillOpacity=".5" fontSize="7" fontFamily="monospace">chromium · headless</text>

        <line x1="80" y1="74" x2="280" y2="74" stroke="#00d9a6" strokeOpacity=".1" strokeWidth="1"></line>
        <line x1="80" y1="96" x2="240" y2="96" stroke="#00d9a6" strokeOpacity=".08" strokeWidth="1"></line>
        <line x1="80" y1="118" x2="260" y2="118" stroke="#00d9a6" strokeOpacity=".08" strokeWidth="1"></line>
        <line x1="80" y1="140" x2="220" y2="140" stroke="#00d9a6" strokeOpacity=".07" strokeWidth="1"></line>

        <polygon points="172,160 188,160 180,172" fill="#00d9a6" fillOpacity=".35" stroke="none"></polygon>
        <text x="142" y="166" fill="#00d9a6" fillOpacity=".45" fontSize="7" fontFamily="monospace">scroll ↓ space</text>

        <line x1="180" y1="182" x2="180" y2="206" stroke="#4f9ef8" strokeOpacity=".25" strokeWidth="1" strokeDasharray="3,3"></line>
        <polygon points="176,204 180,212 184,204" fill="#4f9ef8" fillOpacity=".4" stroke="none"></polygon>

        <rect x="96" y="214" width="168" height="26" rx="5" fill="#4f9ef8" fillOpacity=".09" stroke="#4f9ef8" strokeOpacity=".35" strokeWidth="1"></rect>
        <text x="104" y="231" fill="#4f9ef8" fillOpacity=".55" fontSize="8" fontFamily="monospace">intercept: SearchTimeline</text>

        <line x1="180" y1="240" x2="180" y2="262" stroke="#00d9a6" strokeOpacity=".2" strokeWidth="1" strokeDasharray="3,3"></line>

        <circle cx="100" cy="280" r="16" fill="#00d9a6" fillOpacity=".08" stroke="#00d9a6" strokeOpacity=".35" strokeWidth="1.5"></circle>
        <text x="86" y="284" fill="#00d9a6" fillOpacity=".55" fontSize="7" fontFamily="monospace">acc 1</text>
        <circle cx="180" cy="280" r="16" fill="#00d9a6" fillOpacity=".14" stroke="#00d9a6" strokeOpacity=".5" strokeWidth="1.5"></circle>
        <text x="166" y="284" fill="#00d9a6" fillOpacity=".7" fontSize="7" fontFamily="monospace">acc 2</text>
        <circle cx="260" cy="280" r="16" fill="#00d9a6" fillOpacity=".08" stroke="#00d9a6" strokeOpacity=".35" strokeWidth="1.5"></circle>
        <text x="246" y="284" fill="#00d9a6" fillOpacity=".55" fontSize="7" fontFamily="monospace">acc 3</text>
        <text x="118" y="306" fill="#4f9ef8" fillOpacity=".4" fontSize="7" fontFamily="monospace">account pool · rotate on 401</text>

        <line x1="180" y1="296" x2="180" y2="318" stroke="#00d9a6" strokeOpacity=".2" strokeWidth="1" strokeDasharray="3,3"></line>

        <rect x="96" y="320" width="168" height="26" rx="5" fill="#00d9a6" fillOpacity=".08" stroke="#00d9a6" strokeOpacity=".32" strokeWidth="1"></rect>
        <text x="104" y="337" fill="#00d9a6" fillOpacity=".55" fontSize="8" fontFamily="monospace">→ kafka acis-crawling-twitter</text>
      </g>
    </svg>
  );
}

export function FacebookCrawlerSvg() {
  return (
    <svg viewBox="0 0 360 380" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <g fill="none">
        <rect x="30" y="36" width="76" height="24" rx="5" fill="#4f9ef8" fillOpacity=".09" stroke="#4f9ef8" strokeOpacity=".35" strokeWidth="1"></rect>
        <text x="38" y="53" fill="#4f9ef8" fillOpacity=".55" fontSize="8" fontFamily="monospace">keyword</text>
        <rect x="142" y="36" width="60" height="24" rx="5" fill="#4f9ef8" fillOpacity=".09" stroke="#4f9ef8" strokeOpacity=".35" strokeWidth="1"></rect>
        <text x="150" y="53" fill="#4f9ef8" fillOpacity=".55" fontSize="8" fontFamily="monospace">page</text>
        <rect x="234" y="36" width="64" height="24" rx="5" fill="#4f9ef8" fillOpacity=".09" stroke="#4f9ef8" strokeOpacity=".35" strokeWidth="1"></rect>
        <text x="244" y="53" fill="#4f9ef8" fillOpacity=".55" fontSize="8" fontFamily="monospace">group</text>

        <line x1="68" y1="60" x2="150" y2="96" stroke="#4f9ef8" strokeOpacity=".18" strokeWidth="1" strokeDasharray="3,3"></line>
        <line x1="172" y1="60" x2="180" y2="96" stroke="#4f9ef8" strokeOpacity=".18" strokeWidth="1" strokeDasharray="3,3"></line>
        <line x1="266" y1="60" x2="210" y2="96" stroke="#4f9ef8" strokeOpacity=".18" strokeWidth="1" strokeDasharray="3,3"></line>

        <rect x="110" y="98" width="140" height="28" rx="5" fill="#00d9a6" fillOpacity=".1" stroke="#00d9a6" strokeOpacity=".4" strokeWidth="1.5"></rect>
        <text x="120" y="116" fill="#00d9a6" fillOpacity=".65" fontSize="9" fontFamily="monospace">graphql + redirect</text>

        <line x1="180" y1="126" x2="180" y2="150" stroke="#00d9a6" strokeOpacity=".22" strokeWidth="1" strokeDasharray="3,3"></line>
        <polygon points="176,148 180,156 184,148" fill="#00d9a6" fillOpacity=".4" stroke="none"></polygon>

        <circle cx="180" cy="186" r="34" fill="none" stroke="#00d9a6" strokeOpacity=".12" strokeWidth="1" strokeDasharray="4,4"></circle>
        <circle cx="180" cy="186" r="12" fill="#00d9a6" fillOpacity=".1" stroke="#00d9a6" strokeOpacity=".4" strokeWidth="1.5"></circle>
        <text x="148" y="218" fill="#00d9a6" fillOpacity=".55" fontSize="8" fontFamily="monospace">credential hub</text>
        <text x="150" y="230" fill="#00d9a6" fillOpacity=".4" fontSize="7" fontFamily="monospace">checkout 300s lease</text>

        <line x1="146" y1="186" x2="90" y2="186" stroke="#4f9ef8" strokeOpacity=".15" strokeWidth="1" strokeDasharray="2,4"></line>
        <text x="34" y="190" fill="#4f9ef8" fillOpacity=".35" fontSize="7" fontFamily="monospace">tor / proxy</text>

        <line x1="180" y1="244" x2="180" y2="266" stroke="#00d9a6" strokeOpacity=".2" strokeWidth="1" strokeDasharray="3,3"></line>

        <rect x="108" y="268" width="144" height="24" rx="5" fill="#4f9ef8" fillOpacity=".08" stroke="#4f9ef8" strokeOpacity=".3" strokeWidth="1"></rect>
        <text x="118" y="284" fill="#4f9ef8" fillOpacity=".55" fontSize="8" fontFamily="monospace">redis post dedup</text>

        <line x1="180" y1="292" x2="180" y2="312" stroke="#00d9a6" strokeOpacity=".18" strokeWidth="1" strokeDasharray="3,3"></line>

        <rect x="84" y="314" width="192" height="26" rx="5" fill="#00d9a6" fillOpacity=".08" stroke="#00d9a6" strokeOpacity=".32" strokeWidth="1"></rect>
        <text x="92" y="331" fill="#00d9a6" fillOpacity=".55" fontSize="9" fontFamily="monospace">→ kafka acis-crawling-facebook</text>
      </g>
    </svg>
  );
}

export function RapidApiDualCrawlerSvg() {
  return (
    <svg viewBox="0 0 360 380" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <g fill="none">
        <rect x="40" y="34" width="100" height="26" rx="5" fill="#4f9ef8" fillOpacity=".09" stroke="#4f9ef8" strokeOpacity=".35" strokeWidth="1"></rect>
        <text x="50" y="51" fill="#4f9ef8" fillOpacity=".55" fontSize="8" fontFamily="monospace">keyword search</text>
        <rect x="216" y="34" width="100" height="26" rx="5" fill="#4f9ef8" fillOpacity=".09" stroke="#4f9ef8" strokeOpacity=".35" strokeWidth="1"></rect>
        <text x="228" y="51" fill="#4f9ef8" fillOpacity=".55" fontSize="8" fontFamily="monospace">account posts</text>

        <line x1="90" y1="60" x2="150" y2="92" stroke="#4f9ef8" strokeOpacity=".18" strokeWidth="1" strokeDasharray="3,3"></line>
        <line x1="266" y1="60" x2="210" y2="92" stroke="#4f9ef8" strokeOpacity=".18" strokeWidth="1" strokeDasharray="3,3"></line>

        <rect x="118" y="94" width="124" height="26" rx="5" fill="#00d9a6" fillOpacity=".09" stroke="#00d9a6" strokeOpacity=".35" strokeWidth="1"></rect>
        <text x="128" y="111" fill="#00d9a6" fillOpacity=".6" fontSize="8" fontFamily="monospace">rapidapi proxy host</text>

        <line x1="180" y1="120" x2="180" y2="142" stroke="#00d9a6" strokeOpacity=".22" strokeWidth="1" strokeDasharray="3,3"></line>
        <polygon points="176,140 180,148 184,140" fill="#00d9a6" fillOpacity=".4" stroke="none"></polygon>

        <rect x="106" y="150" width="60" height="44" rx="6" fill="#00d9a6" fillOpacity=".1" stroke="#00d9a6" strokeOpacity=".4" strokeWidth="1.5"></rect>
        <text x="118" y="168" fill="#00d9a6" fillOpacity=".6" fontSize="7" fontFamily="monospace">get-one</text>
        <text x="118" y="180" fill="#00d9a6" fillOpacity=".5" fontSize="7" fontFamily="monospace">key_value</text>

        <rect x="194" y="150" width="60" height="44" rx="6" fill="#4f9ef8" fillOpacity=".1" stroke="#4f9ef8" strokeOpacity=".4" strokeWidth="1.5"></rect>
        <text x="200" y="168" fill="#4f9ef8" fillOpacity=".6" fontSize="7" fontFamily="monospace">log-usage</text>
        <text x="200" y="180" fill="#4f9ef8" fillOpacity=".5" fontSize="7" fontFamily="monospace">403/429</text>

        <text x="148" y="216" fill="#00d9a6" fillOpacity=".45" fontSize="8" fontFamily="monospace">credential hub</text>

        <line x1="180" y1="222" x2="180" y2="244" stroke="#00d9a6" strokeOpacity=".2" strokeWidth="1" strokeDasharray="3,3"></line>

        <rect x="120" y="246" width="120" height="24" rx="5" fill="#4f9ef8" fillOpacity=".08" stroke="#4f9ef8" strokeOpacity=".3" strokeWidth="1"></rect>
        <text x="130" y="262" fill="#4f9ef8" fillOpacity=".55" fontSize="8" fontFamily="monospace">redis profile cache</text>

        <line x1="180" y1="270" x2="180" y2="292" stroke="#00d9a6" strokeOpacity=".18" strokeWidth="1" strokeDasharray="3,3"></line>

        <rect x="86" y="294" width="188" height="26" rx="5" fill="#00d9a6" fillOpacity=".08" stroke="#00d9a6" strokeOpacity=".32" strokeWidth="1"></rect>
        <text x="96" y="311" fill="#00d9a6" fillOpacity=".55" fontSize="9" fontFamily="monospace">→ kafka acis-crawling-*</text>
      </g>
    </svg>
  );
}

export function ThreadsCrawlerSvg() {
  return (
    <svg viewBox="0 0 360 380" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <g fill="none">
        <rect x="36" y="34" width="90" height="26" rx="5" fill="#4f9ef8" fillOpacity=".09" stroke="#4f9ef8" strokeOpacity=".35" strokeWidth="1"></rect>
        <text x="44" y="51" fill="#4f9ef8" fillOpacity=".55" fontSize="8" fontFamily="monospace">account posts</text>
        <rect x="232" y="34" width="92" height="26" rx="5" fill="#4f9ef8" fillOpacity=".09" stroke="#4f9ef8" strokeOpacity=".35" strokeWidth="1"></rect>
        <text x="240" y="51" fill="#4f9ef8" fillOpacity=".55" fontSize="8" fontFamily="monospace">keyword search</text>

        <line x1="80" y1="60" x2="150" y2="96" stroke="#4f9ef8" strokeOpacity=".18" strokeWidth="1" strokeDasharray="3,3"></line>
        <line x1="276" y1="60" x2="210" y2="96" stroke="#4f9ef8" strokeOpacity=".18" strokeWidth="1" strokeDasharray="3,3"></line>

        <rect x="120" y="98" width="120" height="26" rx="5" fill="#00d9a6" fillOpacity=".1" stroke="#00d9a6" strokeOpacity=".4" strokeWidth="1.5"></rect>
        <text x="128" y="115" fill="#00d9a6" fillOpacity=".65" fontSize="8" fontFamily="monospace">threads graphql</text>

        <line x1="180" y1="124" x2="180" y2="148" stroke="#00d9a6" strokeOpacity=".22" strokeWidth="1" strokeDasharray="3,3"></line>
        <polygon points="176,146 180,154 184,146" fill="#00d9a6" fillOpacity=".4" stroke="none"></polygon>

        <rect x="118" y="156" width="124" height="40" rx="6" fill="#4f9ef8" fillOpacity=".08" stroke="#4f9ef8" strokeOpacity=".32" strokeWidth="1.5"></rect>
        <text x="128" y="174" fill="#4f9ef8" fillOpacity=".55" fontSize="8" fontFamily="monospace">mongodb pool</text>
        <text x="128" y="186" fill="#4f9ef8" fillOpacity=".4" fontSize="7" fontFamily="monospace">account-threads-cw</text>

        <line x1="160" y1="196" x2="140" y2="216" stroke="#00d9a6" strokeOpacity=".18" strokeWidth="1" strokeDasharray="2,4"></line>
        <line x1="200" y1="196" x2="220" y2="216" stroke="#00d9a6" strokeOpacity=".18" strokeWidth="1" strokeDasharray="2,4"></line>

        <text x="92" y="232" fill="#00d9a6" fillOpacity=".4" fontSize="7" fontFamily="monospace">ig_did · csrftoken</text>
        <text x="206" y="232" fill="#00d9a6" fillOpacity=".4" fontSize="7" fontFamily="monospace">sessionid · rur</text>

        <line x1="180" y1="240" x2="180" y2="262" stroke="#00d9a6" strokeOpacity=".2" strokeWidth="1" strokeDasharray="3,3"></line>

        <rect x="124" y="264" width="112" height="24" rx="5" fill="#4f9ef8" fillOpacity=".08" stroke="#4f9ef8" strokeOpacity=".3" strokeWidth="1"></rect>
        <text x="132" y="280" fill="#4f9ef8" fillOpacity=".55" fontSize="8" fontFamily="monospace">redis dedup</text>

        <line x1="180" y1="288" x2="180" y2="310" stroke="#00d9a6" strokeOpacity=".18" strokeWidth="1" strokeDasharray="3,3"></line>

        <rect x="90" y="312" width="180" height="26" rx="5" fill="#00d9a6" fillOpacity=".08" stroke="#00d9a6" strokeOpacity=".32" strokeWidth="1"></rect>
        <text x="98" y="329" fill="#00d9a6" fillOpacity=".55" fontSize="9" fontFamily="monospace">→ kafka acis-crawling-threads</text>
      </g>
    </svg>
  );
}

export function FanoutRouterSvg() {
  return (
    <svg viewBox="0 0 360 380" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <g fill="none">
        <rect x="130" y="30" width="100" height="28" rx="5" fill="#4f9ef8" fillOpacity=".1" stroke="#4f9ef8" strokeOpacity=".4" strokeWidth="1.5"></rect>
        <text x="138" y="48" fill="#4f9ef8" fillOpacity=".6" fontSize="8" fontFamily="monospace">acis-job-interval</text>

        <line x1="180" y1="58" x2="180" y2="82" stroke="#4f9ef8" strokeOpacity=".25" strokeWidth="1" strokeDasharray="3,3"></line>
        <polygon points="176,80 180,88 184,80" fill="#4f9ef8" fillOpacity=".4" stroke="none"></polygon>

        <rect x="110" y="90" width="140" height="30" rx="6" fill="#00d9a6" fillOpacity=".1" stroke="#00d9a6" strokeOpacity=".42" strokeWidth="1.5"></rect>
        <text x="124" y="109" fill="#00d9a6" fillOpacity=".7" fontSize="9" fontFamily="monospace">dedup + route</text>

        <circle cx="180" cy="105" r="58" fill="none" stroke="#00d9a6" strokeOpacity=".08" strokeWidth="1" strokeDasharray="3,5"></circle>

        <line x1="150" y1="118" x2="64" y2="170" stroke="#00d9a6" strokeOpacity=".18" strokeWidth="1"></line>
        <line x1="166" y1="120" x2="120" y2="170" stroke="#00d9a6" strokeOpacity=".18" strokeWidth="1"></line>
        <line x1="194" y1="120" x2="240" y2="170" stroke="#00d9a6" strokeOpacity=".18" strokeWidth="1"></line>
        <line x1="210" y1="118" x2="296" y2="170" stroke="#00d9a6" strokeOpacity=".18" strokeWidth="1"></line>

        <rect x="32" y="172" width="64" height="24" rx="4" fill="#4f9ef8" fillOpacity=".08" stroke="#4f9ef8" strokeOpacity=".3" strokeWidth="1"></rect>
        <text x="40" y="188" fill="#4f9ef8" fillOpacity=".55" fontSize="7" fontFamily="monospace">tiktok</text>
        <rect x="100" y="172" width="64" height="24" rx="4" fill="#4f9ef8" fillOpacity=".08" stroke="#4f9ef8" strokeOpacity=".3" strokeWidth="1"></rect>
        <text x="105" y="188" fill="#4f9ef8" fillOpacity=".55" fontSize="7" fontFamily="monospace">instagram</text>
        <rect x="216" y="172" width="64" height="24" rx="4" fill="#4f9ef8" fillOpacity=".08" stroke="#4f9ef8" strokeOpacity=".3" strokeWidth="1"></rect>
        <text x="226" y="188" fill="#4f9ef8" fillOpacity=".55" fontSize="7" fontFamily="monospace">facebook</text>
        <rect x="284" y="172" width="64" height="24" rx="4" fill="#4f9ef8" fillOpacity=".08" stroke="#4f9ef8" strokeOpacity=".3" strokeWidth="1"></rect>
        <text x="294" y="188" fill="#4f9ef8" fillOpacity=".55" fontSize="7" fontFamily="monospace">threads</text>

        <text x="128" y="222" fill="#00d9a6" fillOpacity=".4" fontSize="8" fontFamily="monospace">acis_{`{platform}`}_{`{type}`}</text>

        <line x1="180" y1="196" x2="180" y2="240" stroke="#00d9a6" strokeOpacity=".15" strokeWidth="1" strokeDasharray="2,4"></line>

        <rect x="120" y="256" width="120" height="26" rx="5" fill="#4f9ef8" fillOpacity=".08" stroke="#4f9ef8" strokeOpacity=".3" strokeWidth="1"></rect>
        <text x="128" y="273" fill="#4f9ef8" fillOpacity=".55" fontSize="8" fontFamily="monospace">redis dedup ttl=240s</text>

        <line x1="180" y1="282" x2="180" y2="306" stroke="#00d9a6" strokeOpacity=".18" strokeWidth="1" strokeDasharray="3,3"></line>

        <rect x="90" y="308" width="180" height="26" rx="5" fill="#00d9a6" fillOpacity=".08" stroke="#00d9a6" strokeOpacity=".32" strokeWidth="1"></rect>
        <text x="98" y="325" fill="#00d9a6" fillOpacity=".55" fontSize="9" fontFamily="monospace">→ beanstalkd tubes</text>
      </g>
    </svg>
  );
}

export function EtlArchitectureSvg() {
  return (
    <svg viewBox="0 0 360 380" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <g fill="none">
        <rect x="120" y="44" width="120" height="30" fill="none" stroke="#00d9a6" strokeOpacity=".22" strokeWidth="1" strokeDasharray="3,4"></rect>
        <text x="148" y="63" fill="#00d9a6" fillOpacity=".38" fontSize="10" fontFamily="monospace">source_data</text>
        <line x1="180" y1="74" x2="180" y2="104" stroke="#00d9a6" strokeOpacity=".2" strokeWidth="1"></line>
        <rect x="52" y="105" width="80" height="54" fill="#00d9a6" fillOpacity=".08" stroke="#00d9a6" strokeOpacity=".32" strokeWidth="1.5"></rect>
        <text x="80" y="137" fill="#00d9a6" fillOpacity=".65" fontSize="22" fontFamily="monospace" fontWeight="bold">E</text>
        <rect x="140" y="105" width="80" height="54" fill="#4f9ef8" fillOpacity=".08" stroke="#4f9ef8" strokeOpacity=".32" strokeWidth="1.5"></rect>
        <text x="168" y="137" fill="#4f9ef8" fillOpacity=".65" fontSize="22" fontFamily="monospace" fontWeight="bold">T</text>
        <rect x="228" y="105" width="80" height="54" fill="#00d9a6" fillOpacity=".14" stroke="#00d9a6" strokeOpacity=".45" strokeWidth="1.5"></rect>
        <text x="256" y="137" fill="#00d9a6" fillOpacity=".65" fontSize="22" fontFamily="monospace" fontWeight="bold">L</text>
        <line x1="133" y1="132" x2="138" y2="132" stroke="#00d9a6" strokeOpacity=".4" strokeWidth="2"></line>
        <polygon points="136,128 144,132 136,136" fill="#00d9a6" fillOpacity=".55" stroke="none"></polygon>
        <line x1="221" y1="132" x2="226" y2="132" stroke="#4f9ef8" strokeOpacity=".4" strokeWidth="2"></line>
        <polygon points="224,128 232,132 224,136" fill="#4f9ef8" fillOpacity=".55" stroke="none"></polygon>
        <rect x="52" y="192" width="60" height="26" fill="#00d9a6" fillOpacity=".06" stroke="#00d9a6" strokeOpacity=".18" strokeWidth="1"></rect>
        <rect x="122" y="192" width="60" height="26" fill="#4f9ef8" fillOpacity=".06" stroke="#4f9ef8" strokeOpacity=".18" strokeWidth="1"></rect>
        <rect x="192" y="192" width="60" height="26" fill="#00d9a6" fillOpacity=".06" stroke="#00d9a6" strokeOpacity=".18" strokeWidth="1"></rect>
        <rect x="262" y="192" width="48" height="26" fill="none" stroke="#00d9a6" strokeOpacity=".14" strokeDasharray="2,3" strokeWidth="1"></rect>
        <text x="66" y="209" fill="#00d9a6" fillOpacity=".38" fontSize="8" fontFamily="monospace">extract</text>
        <text x="134" y="209" fill="#4f9ef8" fillOpacity=".38" fontSize="8" fontFamily="monospace">transform</text>
        <text x="206" y="209" fill="#00d9a6" fillOpacity=".38" fontSize="8" fontFamily="monospace">validate</text>
        <text x="268" y="209" fill="#00d9a6" fillOpacity=".3" fontSize="8" fontFamily="monospace">config</text>
        <rect x="110" y="248" width="140" height="30" fill="none" stroke="#4f9ef8" strokeOpacity=".35" strokeDasharray="5,3" strokeWidth="1.5"></rect>
        <text x="140" y="268" fill="#4f9ef8" fillOpacity=".5" fontSize="10" fontFamily="monospace">data_quality</text>
        <rect x="130" y="312" width="100" height="28" fill="#00d9a6" fillOpacity=".08" stroke="#00d9a6" strokeOpacity=".3" strokeWidth="1"></rect>
        <text x="152" y="330" fill="#00d9a6" fillOpacity=".5" fontSize="9" fontFamily="monospace">→ postgres</text>
        <line x1="180" y1="278" x2="180" y2="310" stroke="#00d9a6" strokeOpacity=".18" strokeWidth="1"></line>
      </g>
    </svg>
  );
}
