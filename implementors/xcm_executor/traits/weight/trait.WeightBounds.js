(function() {var implementors = {};
implementors["xcm_builder"] = [{"text":"impl&lt;T:&nbsp;Get&lt;Weight&gt;, C:&nbsp;Decode + GetDispatchInfo, M:&nbsp;Get&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.56.1/std/primitive.u32.html\">u32</a>&gt;&gt; <a class=\"trait\" href=\"xcm_executor/traits/weight/trait.WeightBounds.html\" title=\"trait xcm_executor::traits::weight::WeightBounds\">WeightBounds</a>&lt;C&gt; for <a class=\"struct\" href=\"xcm_builder/struct.FixedWeightBounds.html\" title=\"struct xcm_builder::FixedWeightBounds\">FixedWeightBounds</a>&lt;T, C, M&gt;","synthetic":false,"types":["xcm_builder::weight::FixedWeightBounds"]},{"text":"impl&lt;W, C, M&gt; <a class=\"trait\" href=\"xcm_executor/traits/weight/trait.WeightBounds.html\" title=\"trait xcm_executor::traits::weight::WeightBounds\">WeightBounds</a>&lt;C&gt; for <a class=\"struct\" href=\"xcm_builder/struct.WeightInfoBounds.html\" title=\"struct xcm_builder::WeightInfoBounds\">WeightInfoBounds</a>&lt;W, C, M&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;W: <a class=\"trait\" href=\"xcm/v2/traits/trait.XcmWeightInfo.html\" title=\"trait xcm::v2::traits::XcmWeightInfo\">XcmWeightInfo</a>&lt;C&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;C: Decode + GetDispatchInfo,<br>&nbsp;&nbsp;&nbsp;&nbsp;M: Get&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.56.1/std/primitive.u32.html\">u32</a>&gt;,<br>&nbsp;&nbsp;&nbsp;&nbsp;<a class=\"enum\" href=\"xcm/v2/enum.Instruction.html\" title=\"enum xcm::v2::Instruction\">Instruction</a>&lt;C&gt;: <a class=\"trait\" href=\"xcm/trait.GetWeight.html\" title=\"trait xcm::GetWeight\">GetWeight</a>&lt;W&gt;,&nbsp;</span>","synthetic":false,"types":["xcm_builder::weight::WeightInfoBounds"]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()