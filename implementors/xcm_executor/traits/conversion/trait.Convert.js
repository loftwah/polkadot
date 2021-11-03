(function() {var implementors = {};
implementors["xcm_builder"] = [{"text":"impl&lt;Network:&nbsp;Get&lt;<a class=\"enum\" href=\"xcm/v0/junction/enum.NetworkId.html\" title=\"enum xcm::v0::junction::NetworkId\">NetworkId</a>&gt;, AccountId:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/1.56.1/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.56.1/std/primitive.array.html\">[</a><a class=\"primitive\" href=\"https://doc.rust-lang.org/1.56.1/std/primitive.u8.html\">u8</a><a class=\"primitive\" href=\"https://doc.rust-lang.org/1.56.1/std/primitive.array.html\">; 32]</a>&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.56.1/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.56.1/std/primitive.array.html\">[</a><a class=\"primitive\" href=\"https://doc.rust-lang.org/1.56.1/std/primitive.u8.html\">u8</a><a class=\"primitive\" href=\"https://doc.rust-lang.org/1.56.1/std/primitive.array.html\">; 32]</a>&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.56.1/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>&gt; <a class=\"trait\" href=\"xcm_executor/traits/conversion/trait.Convert.html\" title=\"trait xcm_executor::traits::conversion::Convert\">Convert</a>&lt;<a class=\"struct\" href=\"xcm/v1/multilocation/struct.MultiLocation.html\" title=\"struct xcm::v1::multilocation::MultiLocation\">MultiLocation</a>, AccountId&gt; for <a class=\"struct\" href=\"xcm_builder/struct.Account32Hash.html\" title=\"struct xcm_builder::Account32Hash\">Account32Hash</a>&lt;Network, AccountId&gt;","synthetic":false,"types":["xcm_builder::location_conversion::Account32Hash"]},{"text":"impl&lt;AccountId:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/1.56.1/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.56.1/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.56.1/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>&gt; <a class=\"trait\" href=\"xcm_executor/traits/conversion/trait.Convert.html\" title=\"trait xcm_executor::traits::conversion::Convert\">Convert</a>&lt;<a class=\"struct\" href=\"xcm/v1/multilocation/struct.MultiLocation.html\" title=\"struct xcm::v1::multilocation::MultiLocation\">MultiLocation</a>, AccountId&gt; for <a class=\"struct\" href=\"xcm_builder/struct.ParentIsDefault.html\" title=\"struct xcm_builder::ParentIsDefault\">ParentIsDefault</a>&lt;AccountId&gt;","synthetic":false,"types":["xcm_builder::location_conversion::ParentIsDefault"]},{"text":"impl&lt;ParaId:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/1.56.1/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.56.1/std/primitive.u32.html\">u32</a>&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.56.1/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.56.1/std/primitive.u32.html\">u32</a>&gt; + AccountIdConversion&lt;AccountId&gt;, AccountId:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/1.56.1/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>&gt; <a class=\"trait\" href=\"xcm_executor/traits/conversion/trait.Convert.html\" title=\"trait xcm_executor::traits::conversion::Convert\">Convert</a>&lt;<a class=\"struct\" href=\"xcm/v1/multilocation/struct.MultiLocation.html\" title=\"struct xcm::v1::multilocation::MultiLocation\">MultiLocation</a>, AccountId&gt; for <a class=\"struct\" href=\"xcm_builder/struct.ChildParachainConvertsVia.html\" title=\"struct xcm_builder::ChildParachainConvertsVia\">ChildParachainConvertsVia</a>&lt;ParaId, AccountId&gt;","synthetic":false,"types":["xcm_builder::location_conversion::ChildParachainConvertsVia"]},{"text":"impl&lt;ParaId:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/1.56.1/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.56.1/std/primitive.u32.html\">u32</a>&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.56.1/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.56.1/std/primitive.u32.html\">u32</a>&gt; + AccountIdConversion&lt;AccountId&gt;, AccountId:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/1.56.1/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>&gt; <a class=\"trait\" href=\"xcm_executor/traits/conversion/trait.Convert.html\" title=\"trait xcm_executor::traits::conversion::Convert\">Convert</a>&lt;<a class=\"struct\" href=\"xcm/v1/multilocation/struct.MultiLocation.html\" title=\"struct xcm::v1::multilocation::MultiLocation\">MultiLocation</a>, AccountId&gt; for <a class=\"struct\" href=\"xcm_builder/struct.SiblingParachainConvertsVia.html\" title=\"struct xcm_builder::SiblingParachainConvertsVia\">SiblingParachainConvertsVia</a>&lt;ParaId, AccountId&gt;","synthetic":false,"types":["xcm_builder::location_conversion::SiblingParachainConvertsVia"]},{"text":"impl&lt;Network:&nbsp;Get&lt;<a class=\"enum\" href=\"xcm/v0/junction/enum.NetworkId.html\" title=\"enum xcm::v0::junction::NetworkId\">NetworkId</a>&gt;, AccountId:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/1.56.1/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.56.1/std/primitive.array.html\">[</a><a class=\"primitive\" href=\"https://doc.rust-lang.org/1.56.1/std/primitive.u8.html\">u8</a><a class=\"primitive\" href=\"https://doc.rust-lang.org/1.56.1/std/primitive.array.html\">; 32]</a>&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.56.1/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.56.1/std/primitive.array.html\">[</a><a class=\"primitive\" href=\"https://doc.rust-lang.org/1.56.1/std/primitive.u8.html\">u8</a><a class=\"primitive\" href=\"https://doc.rust-lang.org/1.56.1/std/primitive.array.html\">; 32]</a>&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.56.1/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>&gt; <a class=\"trait\" href=\"xcm_executor/traits/conversion/trait.Convert.html\" title=\"trait xcm_executor::traits::conversion::Convert\">Convert</a>&lt;<a class=\"struct\" href=\"xcm/v1/multilocation/struct.MultiLocation.html\" title=\"struct xcm::v1::multilocation::MultiLocation\">MultiLocation</a>, AccountId&gt; for <a class=\"struct\" href=\"xcm_builder/struct.AccountId32Aliases.html\" title=\"struct xcm_builder::AccountId32Aliases\">AccountId32Aliases</a>&lt;Network, AccountId&gt;","synthetic":false,"types":["xcm_builder::location_conversion::AccountId32Aliases"]},{"text":"impl&lt;Network:&nbsp;Get&lt;<a class=\"enum\" href=\"xcm/v0/junction/enum.NetworkId.html\" title=\"enum xcm::v0::junction::NetworkId\">NetworkId</a>&gt;, AccountId:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/1.56.1/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.56.1/std/primitive.array.html\">[</a><a class=\"primitive\" href=\"https://doc.rust-lang.org/1.56.1/std/primitive.u8.html\">u8</a><a class=\"primitive\" href=\"https://doc.rust-lang.org/1.56.1/std/primitive.array.html\">; 20]</a>&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.56.1/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.56.1/std/primitive.array.html\">[</a><a class=\"primitive\" href=\"https://doc.rust-lang.org/1.56.1/std/primitive.u8.html\">u8</a><a class=\"primitive\" href=\"https://doc.rust-lang.org/1.56.1/std/primitive.array.html\">; 20]</a>&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.56.1/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>&gt; <a class=\"trait\" href=\"xcm_executor/traits/conversion/trait.Convert.html\" title=\"trait xcm_executor::traits::conversion::Convert\">Convert</a>&lt;<a class=\"struct\" href=\"xcm/v1/multilocation/struct.MultiLocation.html\" title=\"struct xcm::v1::multilocation::MultiLocation\">MultiLocation</a>, AccountId&gt; for <a class=\"struct\" href=\"xcm_builder/struct.AccountKey20Aliases.html\" title=\"struct xcm_builder::AccountKey20Aliases\">AccountKey20Aliases</a>&lt;Network, AccountId&gt;","synthetic":false,"types":["xcm_builder::location_conversion::AccountKey20Aliases"]},{"text":"impl&lt;Origin:&nbsp;OriginTrait + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.56.1/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>, AccountId:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/1.56.1/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.56.1/std/primitive.array.html\">[</a><a class=\"primitive\" href=\"https://doc.rust-lang.org/1.56.1/std/primitive.u8.html\">u8</a><a class=\"primitive\" href=\"https://doc.rust-lang.org/1.56.1/std/primitive.array.html\">; 32]</a>&gt;, Network:&nbsp;Get&lt;<a class=\"enum\" href=\"xcm/v0/junction/enum.NetworkId.html\" title=\"enum xcm::v0::junction::NetworkId\">NetworkId</a>&gt;&gt; <a class=\"trait\" href=\"xcm_executor/traits/conversion/trait.Convert.html\" title=\"trait xcm_executor::traits::conversion::Convert\">Convert</a>&lt;Origin, <a class=\"struct\" href=\"xcm/v1/multilocation/struct.MultiLocation.html\" title=\"struct xcm::v1::multilocation::MultiLocation\">MultiLocation</a>&gt; for <a class=\"struct\" href=\"xcm_builder/struct.SignedToAccountId32.html\" title=\"struct xcm_builder::SignedToAccountId32\">SignedToAccountId32</a>&lt;Origin, AccountId, Network&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Origin::PalletsOrigin: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.56.1/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;SystemRawOrigin&lt;AccountId&gt;&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.56.1/core/convert/trait.TryInto.html\" title=\"trait core::convert::TryInto\">TryInto</a>&lt;SystemRawOrigin&lt;AccountId&gt;, Error = Origin::PalletsOrigin&gt;,&nbsp;</span>","synthetic":false,"types":["xcm_builder::origin_conversion::SignedToAccountId32"]},{"text":"impl&lt;Origin:&nbsp;OriginTrait + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.56.1/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>, COrigin:&nbsp;GetBacking, Body:&nbsp;Get&lt;<a class=\"enum\" href=\"xcm/v0/junction/enum.BodyId.html\" title=\"enum xcm::v0::junction::BodyId\">BodyId</a>&gt;&gt; <a class=\"trait\" href=\"xcm_executor/traits/conversion/trait.Convert.html\" title=\"trait xcm_executor::traits::conversion::Convert\">Convert</a>&lt;Origin, <a class=\"struct\" href=\"xcm/v1/multilocation/struct.MultiLocation.html\" title=\"struct xcm::v1::multilocation::MultiLocation\">MultiLocation</a>&gt; for <a class=\"struct\" href=\"xcm_builder/struct.BackingToPlurality.html\" title=\"struct xcm_builder::BackingToPlurality\">BackingToPlurality</a>&lt;Origin, COrigin, Body&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Origin::PalletsOrigin: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.56.1/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;COrigin&gt; + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.56.1/core/convert/trait.TryInto.html\" title=\"trait core::convert::TryInto\">TryInto</a>&lt;COrigin, Error = Origin::PalletsOrigin&gt;,&nbsp;</span>","synthetic":false,"types":["xcm_builder::origin_conversion::BackingToPlurality"]},{"text":"impl&lt;Prefix:&nbsp;Get&lt;<a class=\"struct\" href=\"xcm/v1/multilocation/struct.MultiLocation.html\" title=\"struct xcm::v1::multilocation::MultiLocation\">MultiLocation</a>&gt;, AssetId:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/1.56.1/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a>, ConvertAssetId:&nbsp;<a class=\"trait\" href=\"xcm_executor/traits/conversion/trait.Convert.html\" title=\"trait xcm_executor::traits::conversion::Convert\">Convert</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/1.56.1/std/primitive.u128.html\">u128</a>, AssetId&gt;&gt; <a class=\"trait\" href=\"xcm_executor/traits/conversion/trait.Convert.html\" title=\"trait xcm_executor::traits::conversion::Convert\">Convert</a>&lt;<a class=\"struct\" href=\"xcm/v1/multilocation/struct.MultiLocation.html\" title=\"struct xcm::v1::multilocation::MultiLocation\">MultiLocation</a>, AssetId&gt; for <a class=\"struct\" href=\"xcm_builder/struct.AsPrefixedGeneralIndex.html\" title=\"struct xcm_builder::AsPrefixedGeneralIndex\">AsPrefixedGeneralIndex</a>&lt;Prefix, AssetId, ConvertAssetId&gt;","synthetic":false,"types":["xcm_builder::fungibles_adapter::AsPrefixedGeneralIndex"]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()