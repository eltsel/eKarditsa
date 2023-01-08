<template>
  <main>
    <div>
      <img
        src="/Pictures/road.jpg"
        alt=""
        class="h-[300px] w-full flex justify-center content-center"
      />
      <h1
        class="relative bottom-[150px] text-main font-medium text-5xl bg-white/80 w-full flex justify-center content-center items-center h-24"
      >
        Μέσα μεταφοράς
      </h1>
    </div>
    <div
      class="w-full lg:w-[80%] mx-auto mb-4 bg-main text-white rounded-t-lg p-[20px] flex justify-center"
    >
      <h2 class="text-2xl font-bold">Υπεραστικό ΚΤΕΛ</h2>
    </div>

    <div
      class="place-content-around w-full lg:w-[80%] flex flex-wrap mx-auto mb-[40px]"
    >
      <div class="flex flex-col w-[80%] lg:w-[40%] mb-16">
        <p
          class="flex mx-auto justify-center text-xl bg-gray-200 text-main rounded-t-lg font-bold p-[10px] w-full"
        >
          Καρδίτσα - Αθήνα
        </p>
        <p class="flex my-2 px-4">
          <span class="flex font-medium text-lg w-44">Ώρα αναχώρησης</span>
          <span class="flex font-medium text-lg"
            >Δρομολόγια
            <span
              class="text-base font-medium flex justify-end content-end items-end px-2"
              >(Δευτέρα έως Σάββατο)</span
            ></span
          >
        </p>
        <p
          class="flex px-4 py-2"
          :class="{ 'bg-gray-200': index % 2 == 0 }"
          v-for="(d, index) in dromologia"
          :key="index"
        >
          <span class="flex w-44">{{ d.time }}</span>
          <span class="flex">{{ d.route }}</span>
        </p>
        <p class="flex my-2 px-4 mt-[50px]">
          <span class="flex font-medium text-lg w-44">Ώρα αναχώρησης</span>
          <span class="flex font-medium text-lg"
            >Δρομολόγια
            <span
              class="text-base font-medium flex justify-end content-end items-end px-2"
              >(Κυριακή)</span
            ></span
          >
        </p>
        <p
          class="flex px-4 py-2"
          :class="{ 'bg-gray-200': index % 2 == 0 }"
          v-for="(d, index) in dromologia_kiriakis"
          :key="index"
        >
          <span class="flex w-44">{{ d.time }}</span>
          <span class="flex">{{ d.route }}</span>
        </p>
      </div>

      <div class="flex flex-col w-[80%] lg:w-[40%]">
        <p
          class="flex mx-auto justify-center text-xl bg-gray-200 text-main rounded-t-lg font-bold p-[10px] w-full"
        >
          Αθήνα - Καρδίτσα
        </p>
        <p class="flex my-2 px-4">
          <span class="flex font-medium text-lg w-44">Ώρα αναχώρησης</span>
          <span class="flex font-medium text-lg"
            >Δρομολόγια
            <span
              class="text-base font-medium flex justify-end content-end items-end px-2"
              >(Δευτέρα έως Σάββατο)</span
            ></span
          >
        </p>
        <p
          class="flex px-4 py-2"
          :class="{ 'bg-gray-200': index % 2 == 0 }"
          v-for="(d, index) in dromologia_athens"
          :key="index"
        >
          <span class="flex w-44">{{ d.time }}</span>
          <span class="flex">{{ d.route }}</span>
        </p>
        <p class="flex w-full my-2 px-4 mt-[50px]">
          <span class="flex font-medium text-lg w-44">Ώρα αναχώρησης</span>
          <span class="flex font-medium text-lg"
            >Δρομολόγια
            <span
              class="text-base font-medium flex justify-end content-end items-end px-2"
              >(Κυριακή)</span
            ></span
          >
        </p>
        <p
          class="flex px-4 py-2"
          :class="{ 'bg-gray-200': index % 2 == 0 }"
          v-for="(d, index) in dromologia_athens_kiriaki"
          :key="index"
        >
          <span class="flex w-44">{{ d.time }}</span>
          <span class="flex">{{ d.route }}</span>
        </p>
      </div>
    </div>

    <div
      class="place-content-around lg:w-[80%] flex flex-wrap mx-auto mb-4 border-t-4 border-main"
    >
      <div class="flex flex-col w-[80%] lg:w-[40%] my-10">
        <p
          class="flex mx-auto justify-center text-xl bg-gray-200 text-main rounded-t-lg font-bold p-[10px] w-full"
        >
          Καρδίτσα - Θεσσαλονίκη
        </p>
        <p class="flex my-2 px-4">
          <span class="flex font-medium text-lg w-44">Ώρα αναχώρησης</span>
          <span class="flex font-medium text-lg"
            >Δρομολόγια
            <span
              class="text-base font-medium flex justify-end content-end items-end px-2"
              >(Δευτέρα έως Σάββατο)</span
            ></span
          >
        </p>
        <p
          class="flex px-4 py-2"
          :class="{ 'bg-gray-200': index % 2 == 0 }"
          v-for="(d, index) in dromologia_to_thessaloniki"
          :key="index"
        >
          <span class="flex w-44">{{ d.time }}</span>
          <span class="flex">{{ d.route }}</span>
        </p>
        <p class="flex my-2 px-4 mt-[50px]">
          <span class="flex font-medium text-lg w-44">Ώρα αναχώρησης</span>
          <span class="flex font-medium text-lg"
            >Δρομολόγια
            <span
              class="text-base font-medium flex justify-end content-end items-end px-2"
              >(Κυριακή)</span
            ></span
          >
        </p>
        <p
          class="flex px-4 py-2"
          :class="{ 'bg-gray-200': index % 2 == 0 }"
          v-for="(d, index) in dromologia_to_thessaloniki_kiriaki"
          :key="index"
        >
          <span class="flex w-44">{{ d.time }}</span>
          <span class="flex">{{ d.route }}</span>
        </p>
      </div>

      <div class="flex flex-col w-[80%] lg:w-[40%] my-16">
        <p
          class="flex mx-auto justify-center text-xl bg-gray-200 text-main rounded-t-lg font-bold p-[10px] w-full"
        >
          Θεσσαλονίκη - Καρδίτσα
        </p>
        <p class="flex my-2 px-4">
          <span class="flex font-medium text-lg w-44">Ώρα αναχώρησης</span>
          <span class="flex font-medium text-lg"
            >Δρομολόγια
            <span
              class="text-base font-medium flex justify-end content-end items-end px-2"
              >(Δευτέρα έως Σάββατο)</span
            ></span
          >
        </p>
        <p
          class="flex px-4 py-2"
          :class="{ 'bg-gray-200': index % 2 == 0 }"
          v-for="(d, index) in dromologia_from_thessaloniki"
          :key="index"
        >
          <span class="flex w-44">{{ d.time }}</span>
          <span class="flex">{{ d.route }}</span>
        </p>
        <p class="flex w-full my-2 px-4 mt-[50px]">
          <span class="flex font-medium text-lg w-44">Ώρα αναχώρησης</span>
          <span class="flex font-medium text-lg"
            >Δρομολόγια
            <span
              class="text-base font-medium flex justify-end content-end items-end px-2"
              >(Κυριακή)</span
            ></span
          >
        </p>
        <p
          class="flex px-4 py-2"
          :class="{ 'bg-gray-200': index % 2 == 0 }"
          v-for="(d, index) in dromologia_from_thessaloniki_kiriaki"
          :key="index"
        >
          <span class="flex w-44">{{ d.time }}</span>
          <span class="flex">{{ d.route }}</span>
        </p>
      </div>
    </div>
    <p class="w-[80%] text-center mx-auto mb-10">
        * Στις αργίες υπάρχουν αλλαγές στα δρομολόγια, να επικοινωνείτε πάντα με το τοπικό σας γραφείο πληροφόρησης.
    </p>
    <div
      class="w-full lg:w-[80%] mx-auto mb-4 bg-main text-white rounded-t-lg p-[20px] flex flex-col justify-center content-center items-center mx-auto"
    >
      <h2 class="text-2xl font-bold">Εκδοτήρια</h2>
    </div>

    <div class="place-content-around w-[80%] flex flex-wrap mx-auto mb-16">
      <div class="flex flex-col min-w-max w-full lg:w-[40%] mb-16">
        <div class="flex flex-col mx-auto">
          <span class="flex items-start font-bold mb-2 text-lg">
            Εκδοτήριο Καρδίτσας:</span
          >
          <div class="flex">
            <span class="material-symbols-outlined"> home </span
            ><span class="mx-2">Λ. Δημοκρατίας 56, Καρδίτσα, ΤΚ 43100, </span>
          </div>
          <div class="flex flex-col mb-2">
            <div class="flex mb-2">
              <span class="material-symbols-outlined"> alternate_email </span>
              <span class="mx-2">info@ktel-karditsas.gr,</span>
              <a href="tel:2441071081">24410 71081</a>
            </div>
            <span class="font-medium"
              >Πρόεδρος-Λογιστήριο:
              <span class="font-normal">2441022513,</span></span
            >
            <span class="font-medium"
              >Γραφείο Κινήσεως:
              <span class="font-normal">2441023835,</span></span
            >
            <span class="font-medium"
              >Fax: <span class="font-normal">2441071081,</span></span
            >
            <span class="font-medium my-4"
              >Πληροφορίες - Κρατήσεις Θέσεων:
              <span class="font-normal">2441021411,</span></span
            >
            <span class="font-medium"
              >Κρατήσεις Θέσεων:
              <span class="font-normal">2441021001,</span></span
            >
            <span class="font-medium"
              >Καρδίτσα Αποθήκη:
              <span class="font-normal">2441074114</span></span
            >
            <span class="font-medium"
              >Εκδοτήριο Πόλης:
              <span class="font-normal">2441021001,</span></span
            >
            <span class="font-medium"
              >Κρατήσεις Θέσεων:
              <span class="font-normal">Δ. Τερτίπη 5, Καρδίτσα,</span></span
            >
            <span class="font-medium"
              >What's Up: <span class="font-normal">6976907700</span></span
            >
          </div>
        </div>
      </div>
      <div
        class="flex flex-col justify-center content-center min-w-max w-[80%] lg:w-[40%]"
      >
        <div class="flex flex-col min-w-max w-full lg:w-[40%]">
          <div class="flex flex-col mx-auto">
            <span class="flex justify-start items-start font-bold mb-2 text-lg">
              Υπόλοιπα εκδοτήρια:</span
            >
            <span class="font-medium mb-4"
              >Πρακτορείο Αθηνών:
              <br />
              <span class="font-normal"
                >Κάτω Πατήσια, Λιοσίων 260, Τηλ: 210 8317181</span
              ></span
            >
            <span class="font-medium mb-4"
              >Πρακτορείο Θεσσαλονίκης:
              <br />
              <span class="font-normal"
                >Μενεμένη, Γιαννιτσών 244, Τηλ: 2310 595441, <br />Αποθήκη: 2310
                595457
              </span></span
            >
            <span class="font-medium mb-4"
              >Πρακτορείο Λάρισας:
              <br />
              <span class="font-normal"
                >Ηρώων Πολυτεχνείου 14,Τηλ: 2410 610124
              </span></span
            >
            <span class="font-medium mb-4"
              >Πρακτορείο Σοφάδες:
              <br />
              <span class="font-normal"
                >28ης Οκτωβρίου 27, Τηλ: 24430 22378
              </span></span
            >
            <span class="font-medium mb-4"
              >Πρακτορείο Μουζάκι:
              <br />
              <span class="font-normal"
                >Δημοτική Αγορά, Τηλ: 2445041221
              </span></span
            >
            <span class="font-medium mb-4"
              >Πρακτορείο Παλαμά:
              <br />
              <span class="font-normal"
                >Ανδρούτσου 3, Τηλ: 24440 22220
              </span></span
            >
          </div>
        </div>
      </div>
    </div>
    <p class="w-[80%] text-center mx-auto mb-10">
        Για περισσότερες πληροφορίες, ανακοινώσεις και έκδοση εισητηρίων
        επισκεφτείτε την ιστοσελίδα του υπεραστικού ΚΤΕΛ Καρδίτσας. Θα τη
        βρείτε
      <a href="https://www.ktel-karditsas.gr/" class="text-blue-500">εδώ</a>.
    </p>
  </main>
</template>

<script>
export default {
  data() {
    return {
      dromologia: [
        {
          time: "01:15",
          route: "ΚΑΡΔΙΤΣΑ-ΑΘΗΝΑ Μ.Μ",
        },
        {
          time: "07:00",
          route: "ΚΑΡΔΙΤΣΑ-ΑΘΗΝΑ Μ.Μ",
        },
        {
          time: "10:30",
          route: "ΚΑΡΔΙΤΣΑ-ΑΘΗΝΑ ΜΕΣΩ ΣΟΦΑΔΩΝ Ε65",
        },
        {
          time: "14:00",
          route: "ΚΑΡΔΙΤΣΑ-ΑΘΗΝΑ ΜΕΣΩ ΔΕΛΤΑ Ε65",
        },
        {
          time: "15:30",
          route: "ΚΑΡΔΙΤΣΑ-ΑΘΗΝΑ Μ.Μ",
        },
        {
          time: "18:30\t",
          route: "ΚΑΡΔΙΤΣΑ-ΑΘΗΝΑ ΜΕΣΩ ΣΟΦΑΔΩΝ Ε65",
        },
      ],
      dromologia_kiriakis: [
        {
          time: "10:30",
          route: "ΚΑΡΔΙΤΣΑ-ΑΘΗΝΑ Μ.Μ",
        },
        {
          time: "14:00",
          route: "ΚΑΡΔΙΤΣΑ-ΑΘΗΝΑ ΜΕΣΩ ΔΕΛΤΑ Ε65",
        },
        {
          time: "15:30",
          route: "ΚΑΡΔΙΤΣΑ-ΑΘΗΝΑ Μ.Μ",
        },
        {
          time: "18:30",
          route: "ΚΑΡΔΙΤΣΑ-ΑΘΗΝΑ ΜΕΣΩ ΣΟΦΑΔΩΝ Ε65",
        },
      ],
      dromologia_athens: [
        {
          time: "07:00",
          route: "ΑΘΗΝΑ-ΣΟΦ.ΚΑΡΔΙΤΣΑ",
        },
        {
          time: "10:30",
          route: "ΑΘΗΝΑ-ΚΑΡΔΙΤΣΑ ΜΕΣΩ ΔΕΛΤΑ Ε65",
        },
        {
          time: "13:30",
          route: "ΑΘΗΝΑ-ΚΑΡΔΙΤΣΑ ΜΕΣΩ ΣΟΦΑΔΩΝ Ε65",
        },
        {
          time: "15:30",
          route: "ΑΘΗΝΑ-ΣΟΦ.ΚΑΡΔΙΤΣΑ",
        },
        {
          time: "18:00\t",
          route: "ΑΘΗΝΑ-ΚΑΡΔΙΤΣΑ ΜΕΣΩ ΣΟΦΑΔΩΝ Ε65",
        },
        {
          time: "21:00",
          route: "ΑΘΗΝΑ-ΣΟΦ.ΚΑΡΔΙΤΣΑ",
        },
      ],
      dromologia_athens_kiriaki: [
        {
          time: "10:30",
          route: "ΑΘΗΝΑ-ΣΟΦ.ΚΑΡΔΙΤΣΑ",
        },
        {
          time: "13:30",
          route: "ΑΘΗΝΑ-ΚΑΡΔΙΤΣΑ ΜΕΣΩ ΣΟΦΑΔΩΝ Ε65",
        },
        {
          time: "15:30",
          route: "ΑΘΗΝΑ-ΣΟΦ.ΚΑΡΔΙΤΣΑ",
        },
        {
          time: "18:00",
          route: "ΑΘΗΝΑ-ΚΑΡΔΙΤΣΑ ΜΕΣΩ ΣΟΦΑΔΩΝ Ε65",
        },
        {
          time: "21:00",
          route: "ΑΘΗΝΑ-ΣΟΦ.ΚΑΡΔΙΤΣΑ",
        },
      ],
      dromologia_to_thessaloniki: [
        {
          time: "07:00",
          route: "ΚΑΡΔΙΤΣΑ-ΘΕΣ/ΝΙΚΗ",
        },
        {
          time: "10:30",
          route: "ΚΑΡΔΙΤΣΑ-ΘΕΣ/ΝΙΚΗ",
        },
        {
          time: "16:00",
          route: "ΚΑΡΔΙΤΣΑ-ΘΕΣ/ΝΙΚΗ",
        },
      ],
      dromologia_to_thessaloniki_kiriaki: [
        {
          time: "10:30",
          route: "ΚΑΡΔΙΤΣΑ-ΘΕΣ/ΝΙΚΗ",
        },
        {
          time: "16:00",
          route: "ΚΑΡΔΙΤΣΑ-ΘΕΣ/ΝΙΚΗ",
        },
      ],
      dromologia_from_thessaloniki: [
        {
          time: "10:00",
          route: "ΘΕΣ/ΝΙΚΗ-ΚΑΡΔΙΤΣΑ",
        },
        {
          time: "15:30",
          route: "ΘΕΣ/ΝΙΚΗ-ΚΑΡΔΙΤΣΑ",
        },
        {
          time: "19:30",
          route: "ΘΕΣ/ΝΙΚΗ-ΚΑΡΔΙΤΣΑ",
        },
      ],
      dromologia_from_thessaloniki_kiriaki: [
        {
          time: "15:30",
          route: "ΘΕΣ/ΝΙΚΗ-ΚΑΡΔΙΤΣΑ",
        },
        {
          time: "19:30",
          route: "ΘΕΣ/ΝΙΚΗ-ΚΑΡΔΙΤΣΑ",
        },
      ],
    };
  },
};
</script>
