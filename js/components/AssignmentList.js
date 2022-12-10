import Assignment from "./Assignment.js";
import AssigmentTags from "./AssigmentTags.js";

export default{
    components: { Assignment, AssigmentTags },

    template: `
        <section
            v-show="assignments.length" 
            class="mt-8"
        >
            <h2 class="font-bold mb-2">
                {{ title }}
                <span>({{ assignments.length }})</span>
            </h2>

            <assignment-tags
                v-model:currentTag="currentTag"
                :initial-tags="assignment.map(a => a.tag)"
            ></assignment-tags>
        
            <ul class="border rounded-sm border-gray-600 divide-y divide-gray-600">
                <assignment
                    v-for="assignment in assignments"
                    :key="assignment.id"
                    :assignment="assignment"
                ></assignment>
            </ul>
        </section>
    `,

    props: {
        assignments: Array,
        title: String
    },

    data() {
        return {
            currentTag: "all"
        }
    },

    computed: {
        filteredAssignments() {
            if(this.currentTag === "all"){
                return this.assignments;
            }

            return this.assignments.filter(a => a.tag === this.currentTag);
        }
    }
}