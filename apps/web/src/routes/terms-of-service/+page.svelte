<script>
  import FaArrowLeft from "svelte-icons/fa/FaArrowLeft.svelte";

  import user from "$lib/stores/user";
</script>

<svelte:head>
  <title>Terms Of Service - Tea Share</title>
</svelte:head>

<article class="p-10 pb-32 overflow-y-auto h-screen">
  {#if !$user}
    <a href="/auth" class="btn gap-2 w-52 flex items-center">
      <div class="h-4">
        <FaArrowLeft />
      </div>
      Go back to auth page
    </a>
  {/if}
  <h1 class="text-5xl leading-relaxed font-bold">Terms of Service</h1>
  <p class="px-3">
    These Terms of Service ("Agreement") govern your use of Tea Share, an open-source social media app ("the App"). By using the App, you agree to be
    bound by these terms. If you do not agree to these terms, please refrain from using the App. Acceptance of Terms By using the App, you affirm that
    you have read, understood, and accepted these terms and any additional guidelines or policies referenced herein. You also acknowledge that these
    terms constitute a legally binding agreement between you and Tea Share.
  </p>
  <h2 class="text-4xl leading-loose font-bold">User Accounts and Login</h2>
  <ul class="px-5 list-disc">
    <li>
      You may access the App by creating an account using your Google or email credentials. You are responsible for maintaining the confidentiality of
      your account information and are liable for any activity that occurs under your account.
    </li>
    <li>
      You agree not to share your account credentials with any third party and to notify Tea Share immediately if you suspect any unauthorized use of
      your account.
    </li>
  </ul>
  <h2 class="text-4xl leading-loose font-bold">Data Collection and Privacy</h2>
  <ul class="px-5 list-disc">
    <li>
      Tea Share is committed to user privacy and only collects minimal data necessary for the app's performance analytics. This data includes
      anonymized and aggregated information provided by Vercel Analytics, which is privacy-friendly.
    </li>
    <li>
      Tea Share does not collect any personally identifiable information (PII) beyond what is required for login purposes. We do not track your
      activity, display ads, use popups, or include any other intrusive elements that compromise your privacy.
    </li>
    <li>For more information on how we handle data collection, usage, and protection, please refer to our Privacy Policy.</li>
  </ul>
  <h2 class="text-4xl leading-loose font-bold">User Responsibilities</h2>
  <ul class="px-5 list-disc">
    <li>
      You are solely responsible for any content you post, share, or transmit through Tea Share. You agree not to engage in any illegal, harmful, or
      malicious activities, including but not limited to spamming, spreading hate speech, or infringing upon the rights of others.
    </li>
    <li>
      You understand that Tea Share may moderate and remove any content that violates these terms or is deemed inappropriate, without prior notice or
      liability.
    </li>
  </ul>
  <h2 class="text-4xl leading-loose font-bold">Intellectual Property</h2>
  <ul class="px-5 list-disc">
    <li>
      The App and all its content, including logos, graphics, text, and software, are not intellectual property of Tea Share or its licensors. You are
      free to use them in your own property.
    </li>
    <li>You may copy, modify, distribute, or use any part of the App or its content without explicit written permission from Tea Share.</li>
  </ul>
  <h2 class="text-4xl leading-loose font-bold">Limitation of Liability</h2>
  <ul class="px-5 list-disc">
    <li>
      Tea Share and its contributors shall not be held liable for any direct, indirect, incidental, consequential, or exemplary damages arising from
      your use of the App, including but not limited to loss of data, profits, or reputation.
    </li>
    <li>
      Tea Share strives to provide a reliable and secure platform, but we do not guarantee uninterrupted or error-free access to the App. You
      acknowledge that the App may be subject to temporary disruptions, bugs, or maintenance. Modifications to Terms Tea Share reserves the right to
      modify or update these terms at any time. Any changes will be effective immediately upon posting the revised terms on the App. Your continued
      use of the App after the modifications constitute your acceptance of the revised terms. Governing Law and Jurisdiction This Agreement shall be
      governed by and interpreted in accordance with the laws of [Jurisdiction]. Any disputes arising out of or relating to this Agreement shall be
      subject to the exclusive jurisdiction of the courts located in [Jurisdiction]
    </li>
  </ul>
</article>
