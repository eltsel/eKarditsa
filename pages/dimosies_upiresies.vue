<template>
  <main>
    <div>
      <img
        src="/Pictures/Dimosies/megaro.jpg"
        alt=""
        class="h-[300px] w-full flex justify-center content-center"
      />
      <h1
        class="relative bottom-[150px] text-main font-medium text-5xl bg-white/80 w-full flex justify-center content-center items-center h-24"
      >
        Χρήσιμα τηλέφωνα
      </h1>
    </div>
    <div class="flex flex-col">
      <div class="flex flex-col justify-center content-center items-center">
        <h2 class="mb-[20px] text-main font-medium text-2xl">Αναζήτησε άμεσα τo τηλέφωνο που ψάχνεις</h2>
        <input
          type="text"
          class="p-4 rounded-md w-[500px] border mb-[40px]"
          placeholder="Aναζήτηση υπηρεσίας..."
          v-model="search"
        />
      </div>
      <div
        class="flex w-full justify-center content-start items-start mx-auto flex-wrap"
      >
        <div
          class="flex flex-col rounded-lg lg:w-[600px] w-full m-2 border-2"
          v-for="(l, lindex) in links"
          :key="lindex"
        >
          <span
            class="text-white text-2xl text-xl border-b-2 w-full flex justify-center items-center h-16 bg-main"
            >{{ l.title }}</span
          >

          <div
            class="flex flex-col w-full justify-center content-start items-start"
          >
            <div
              class="border-b-2 flex w-full p-[16px]"
              v-for="(e, eindex) in l.entities"
              :key="eindex"
              v-show="
                e.title
                  .toLowerCase()
                  .normalize('NFD')
                  .includes(search.toLowerCase().normalize('NFD'))
              "
            >
              <span class="mx-4">{{ e.title }}:</span>
              <div class="flex" v-for="(p, pindex) in e.phones" :key="pindex">
                <span v-show="pindex > 0">-</span>
                <a class="mx-1" :href="`tel:${p}`">{{ p }}</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="h-[300px] relative my-24 flex justify-center content-center items-center">
      <img
        src="/Pictures/Dimosies/tilefwna_karditsas.jpg"
        alt=""
        class="w-full flex justify-center content-center items-center"
      />
      <p
        class="absolute top-[0px] h-[300px] text-main font-medium text-2xl bg-white/50 w-full flex justify-center content-center items-center"
      >
        Εντόπισες κάποιο λάθος ή θα ήθελες να συμπεριλάβουμε και κάποιο ακόμη τηλέφωνο;
        <br><br>Επικοινώνησε μαζί μας.
    </p>
    </div>
  </main>
</template>

<script>
export default {
  data() {
    return {
      search: "",
      links: [
        {
          title: "Άμεση ανάγκη",
          entities: [
            {
              title: "Ασφάλεια Καρδίτσας",
              phones: ["24410 22310", "24410 21540"],
            },
            {
              title: "Αστυνομική Διεύθυνση Καρδίτσας",
              phones: ["24410 21777"],
            },
            {
              title: "Αστυνομικό Τμήμα",
              phones: ["24410 21502"],
            },
            {
              title: "Αστυνομικό Τμήμα Περιφέρεια Καρδίτσας",
              phones: ["24410 71943"],
            },
            {
              title: "Αστυνομικό Τμήμα Τροχαίας",
              phones: ["24410 21366", "24410 40802"],
            },
            {
              title: "Πυροσβεστική Υπηρεσία",
              phones: ["199", "24410 71255"],
            },
            {
              title: "Αστυνομική Διεύθυνση Καρδίτσας",
              phones: ["24410 71121"],
            },
            {
              title: "Δασαρχείο (Δασάρχης)",
              phones: ["24410 71486"],
            },
          ],
        },
        {
          title: "Δημοτικές Υπηρεσίες",
          entities: [
            {
              title: "Δημαρχείο (γραφείο Δημάρχου)",
              phones: ["24410 71514", "24410 71521"],
            },
            {
              title: "Δ.Ε.Τ.Α.Κ (Δημοτική επιχείρηση τουριστικής ανάπτυξης)",
              phones: ["24410 42429"],
            },
            {
              title: "Δημοτική Αστυνομία",
              phones: ["24410 71517"],
            },
            {
              title: "Δημοτικό Κινηματοθέατρο",
              phones: ["24410 42712"],
            },
            {
              title: "Δημοτική Βιβλιοθήκη",
              phones: ["24410 23962"],
            },
            {
              title: "Δημοτικό Λαογραφικό Μουσείο",
              phones: ["24410 25301"],
            },
            {
              title: "Τ.Ε.Δ.Κ Ν. Καρδίτσας",
              phones: ["24410 27674"],
            },
          ],
        },
        {
          title: "Δικαιοσύνη",
          entities: [
            {
              title: "Πρωτοδικείο - Πρόεδρος",
              phones: ["24410 21573"],
            },
            {
              title: "Πρωτοδικείο - Εισηγητής/Δικαστής",
              phones: ["24410 22249"],
            },
            {
              title: "Πρωτοδικείο - Γραμματέας",
              phones: ["24410 21563"],
            },
            {
              title: "Εισαγγελία Πρωτοδικών - Εισαγγελέας",
              phones: ["24410 21576"],
            },
            {
              title: "Εισαγγελία Πρωτοδικών - Αντιεισαγγελέας",
              phones: ["24410 23393"],
            },
            {
              title: "Δικαστηρίο Γραμματεία",
              phones: ["24410 24564", "24410 76731"],
            },
            {
              title: "Ανακριτής",
              phones: ["24410 21792"],
            },
            {
              title: "Ποινικό Μητρώο",
              phones: ["24410 24990"],
            },
            {
              title: "Δικαστήριο Ανηλίκων",
              phones: ["24410 22274"],
            },
            {
              title: "Ειρηνοδικείο",
              phones: ["24410 22249"],
            },
            {
              title: "Πταισματοδικείο",
              phones: ["24410 21763", "24410 73333"],
            },
          ],
        },
        {
          title: "Υγεία",
          entities: [
            {
              title: "ΕΚΑΒ",
              phones: ["166"],
            },
            {
              title: "Νοσοκομείο",
              phones: ["24410 65555"],
            },
            {
              title: "ΙΚΑ Γραφεία Διοικητικού",
              phones: ["24410 41951"],
            },
            {
              title: "ΙΚΑ Τμήμα Παροχών Ασθένειας",
              phones: ["24410 22031"],
            },
            {
              title: "ΙΚΑ Τμήμα Μητρώου Ασφαλισμένων",
              phones: ["24410 41945"],
            },
            {
              title: "ΙΚΑ Τμήμα Απονομής Συντάξεων",
              phones: ["24410 75570"],
            },
            {
              title: "ΙΚΑ Τμήμα Πληρωμών Συντάξεων",
              phones: ["24410 41981"],
            },
            {
              title: "Ποινικό Μητρώο",
              phones: ["24410 24990"],
            },
            {
              title: "Νομαρχιακή Μονάδα Υγείας (Πολυατρεία)",
              phones: ["24410 41836"],
            },
            {
              title: "Κέντρο Περίθαλψης Παίδων 'Αγιος Κύριλλος'",
              phones: ["24410 22508"],
            },
            {
              title: "Ίδρυμα Π.Ι.Κ.Π.Α",
              phones: ["24410 21478"],
            },
            {
              title: "Κοινωνική Πρόνοια",
              phones: ["24410 42198 ", "24410 76662"],
            },
            {
              title:
                "ΚΕΚΥΚΑΜΕΑ (Κέντρο Εκπαίδευσης Ατόμων με ειδικές ανάγκες) ",
              phones: ["24410 42198 ", "24410 73333"],
            },
          ],
        },
        {
          title: "Εφορία",
          entities: [
            {
              title: "Εφορία - Προϊστάμενος",
              phones: ["24410 23935"],
            },
            {
              title: "Εφορία - Γραμματεία",
              phones: ["24410 22138"],
            },
            {
              title: "Εφορία - Επόπτης",
              phones: ["24410 22427"],
            },
            {
              title: "Εφορία - Ελεγκτές",
              phones: ["24410 22845"],
            },
            {
              title: "Εφορία - Τμήμα Εισοδήματος",
              phones: ["24410 28219"],
            },
            {
              title: "Εφορία - Τμήμα Κ.Β.Σ",
              phones: ["24410 71585"],
            },
            {
              title: "Εφορία - Τμήμα Μητρώου",
              phones: ["24410 28981"],
            },
            {
              title: "Εφορία - Τμήμα Φ.Μ.Α. - Αυτοκίνητα",
              phones: ["24410 28734"],
            },
            {
              title: "Εφορία - Τμήμα Φ.Π.Α",
              phones: ["24410 23936"],
            },
          ],
        },
        {
          title: "Μετακίνηση",
          entities: [
            {
              title: "ΟΣΕ Σιδηροδρομικός Σταθμός",
              phones: ["24410 21402"],
            },
            {
              title: "Αστικό ΚΤΕΛ Καρδίτσας",
              phones: ["24410 21718"],
            },
            {
              title: "Υπεραστικό ΚΤΕΛ Καρδίτσας (Πληροφορίες - Δρομολόγια)",
              phones: ["24410 21001"],
            },
            {
              title: "Υπεραστικό ΚΤΕΛ Καρδίτσας (Εκδοτήρια Εισιτηρίων)",
              phones: ["24410 22845"],
            },
            {
              title: "ΡΑΔΙΟ ΤΑΞΙ",
              phones: ["24410 73001", "24410 73003"],
            },
            {
              title: "ΤΑΞΙ",
              phones: ["24410 23839", "24410 21740"],
            },
          ],
        },
        {
          title: "Διάφορα",
          entities: [
            {
              title: "ΔΕΗ",
              phones: ["24410 28524"],
            },
            {
              title: "ΔΕΥΑΚ",
              phones: ["24410 71711","24410 71712"],
            },
            {
              title: "Διεύθυνση Γεωργικής Ανάπτυξης",
              phones: ["24410 22910", "24410 25827"],
            },
            {
              title: "Διεύθυνση Κτηνιατρικής",
              phones: ["24410 29626", "24410 28867"],
            },
            {
              title: "Διεύθυνση Γεωργικής Ανάπτυξης",
              phones: ["24410 22910", "24410 25827"],
            },
            {
              title: "Διεύθυνση Εσωτερικών",
              phones: ["24410 21592"],
            },
            {
              title: "Ελληνική Μαθηματικοί Εταιρία",
              phones: ["24410 23088"],
            },
            {
              title: "ΕΛΤΑ",
              phones: ["24410 21567"],
            },
            {
              title: "Επιμελητήριο Ε.Β.Ε.",
              phones: ["24410 40926"],
            },
            {
              title: "Express Service",
              phones: ["154", "24410 62201"],
            },
            {
              title: "Hellas Service",
              phones: ["157", "24410 29363"],
            },
            {
              title: "Interamerican Οδική Βοήθεια",
              phones: ["168", "24410 29303"],
            },
            {
              title: "Κέντρο Γυναικών",
              phones: ["24410 75141", "24410 71594"],
            },
            {
              title: "Κολυμβητική Ακαδημία",
              phones: ["24410 74755"],
            },
            {
              title: "Κτηματική Υπηρεσία",
              phones: ["24410 41820"],
            },
            {
              title: "ΟΑΕΔ",
              phones: ["24410 22777"],
            },
            {
              title: "Πολεοδομία",
              phones: ["24410 21843","24410 28661"],
            },
            {
              title: "Στρατολογικό Γραφείο",
              phones: ["24410 21497"],
            },
            {
              title: "Τελωνείο",
              phones: ["24410 23015","24410 22750"],
            },
          ],
        },
        {
          title: "Διάφορα",
          entities: [
            {
              title: "Νομαρχία",
              phones: ["24410 24294","24413 50102"],
            },
            {
              title: "Τμήμα Αγροτικής Ανάπτυξης",
              phones: ["24410 76846"],
            },
            {
              title: "Γενικά Αρχεία του Κράτους",
              phones: ["24410 71631"],
            },
            {
              title: "Σώμα Επιθεώρησης Εργασίας",
              phones: ["24410 22638", "24410 76719"],
            },
            {
              title: "Γενική Γραμματεία Πολιτικής Προστασίας ",
              phones: ["24410 79020", "24410 79030"],
            },
            {
              title: "Αρχαιολογικό Μουσείο Καρδίτσας",
              phones: ["24410 61564"],
            },
            {
              title: "Διεύθυνση Κοινωνικής Πρόνοιας, Δημόσιας Υγείας και ΑΜΕΑ",
              phones: ["24410 54710"],
            },
            {
              title: "Διεύθυνση Παιδικών και Βρεφονηπιακών Σταθμών",
              phones: ["24410 79159"],
            },
            {
              title: "Διεύθυνση Πρωτοβάθμιας Εκπαίδευσης - Γραμματεία",
              phones: ["24410 71612"],
            },
            {
              title: "Διεύθυνση Δευτεροβάθμιας Εκπαίδευσης - Γραμματεία",
              phones: ["24410 80331"],
            },
            {
              title: "Διεύθυνση ΚΕΠ",
              phones: ["24413 53201"],
            },
            {
              title: "Διεύθυνση Καθαριότητας, Ανακύκλωσης & Πρασίνου",
              phones: ["24410 76000","24413 50702"],
            },
            {
              title: "Αναπτυξιακή Καρδίτσας",
              phones: ["24410 42363"],
            },
            {
              title: "Ενεργειακή Κάμπου Δ. Καρδίτσας (ΕΝΔΗΚΑ Α.Ε.)",
              phones: ["24410 27977"],
            },
            {
              title: "Θεοδωρίδειο Κέντρο “ΟΡΙΖΟΝΤΕΣ”",
              phones: ["24410 71761"],
            },
          ],
        },
        {
          title: "Γραμμές Βοήθειας",
          entities: [
            {
              title: "Γραμμή Βοήθειας για την Κατάθλιψη",
              phones: ["1034"],
            },
            {
              title: "Τηλεφωνική Γραμμή Άμεσης Κοινωνικής Βοήθειας",
              phones: ["197"],
            },
            {
              title: "Γραμμή SOS Αιγινητείου",
              phones: ["210 7222333"],
            },
            {
              title: "Γενική Γραμματεία Πολιτικής Προστασίας ",
              phones: ["24410 79020", "24410 79030"],
            },
            {
              title: "Γραμμή SOS της Γενικής Γραμματείας Ισότητας",
              phones: ["15900"],
            },
            {
              title: "Γραμμή Ψυχολογικής Υποστήριξης Στρατού Ξηράς",
              phones: ["800 1145551"],
            },
            {
              title: "Ανοικτή Τηλεφωνική Γραμμή Ελπίδας Ελληνικής Αντικαρκινικής Εταιρείας",
              phones: ["210 6401200"],
            },
            {
              title: "Γραμμή Βοήθειας για θέματα AIDS Νοσ. Α. Συγγρός",
              phones: ["210 7222222"],
            },
            {
              title: "Εθνική Γραμμή Παιδικής Προστασίας",
              phones: ["1107"],
            },
            {
              title: "Εθνική Γραμμή για τα Παιδιά SOS",
              phones: ["800 1132000"],
            },
            {
              title: "Γραμμή SOS του Οργανισμού Καταπολέμησης των Ναρκωτικών (ΟΚΑΝΑ)",
              phones: ["1031"],
            },
            {
              title: "Κέντρο Θεραπείας Εξαρτημένων Ατόμων (ΚΕΘΕΑ ΙΘΑΚΗ)",
              phones: ["1145"],
            },
            {
              title: "Ανοιχτή γραμμή απεξάρτησης ΙΑΣΩΝ",
              phones: ["210 8656600"],
            },
            {
              title: "Γραμμή για εξάρτηση από τυχερά παιχνίδια του Ελληνικού Κέντρου Διαπολιτισμικής Ψυχιατρικής και Περίθαλψης",
              phones: ["800 1110401"],
            },
          ],
        },
      ],
    };
  },
};
</script>
