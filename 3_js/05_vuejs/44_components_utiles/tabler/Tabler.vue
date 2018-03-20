<template>
    <table class="tabler">
        <thead class="header">
            <tr>
                <th v-for="(row, n) in headerRows" colspan="1">
                    <div class="cell">
                        <span>{{ row.name }}</span>
                        <div v-if="row.sortable" class="sorter">
                            <i @click="sort(row.name, 'up')"
                                class="clickable fa fa-caret-up">
                            </i>
                            <i @click="sort(row.name, 'down')"
                                class="clickable fa fa-caret-down">
                            </i>
                        </div>
                    </div>
                </th>
            </tr>
        </thead>
        <tbody class="body" v-if="bodyRows.length">
            <tr v-for="(row, n) in bodyRows">
                <td v-for="(prop, p, index) in row" v-if="p !== exclude">
                    <span>{{ prop }}</span>
                    <div v-if="p === 'position'" class="f-col sorter">
                        <i @click="callbackSort({
                                id: row.id,
                                dir: 'up'
                            })"
                            v-if="prop > 1"
                            class="clickable fa fa-caret-up">
                        </i>
                        <i @click="callbackSort({
                                id: row.id,
                                dir: 'down'
                            })"
                            v-if="prop < bodyRows.length" class="clickable fa fa-caret-down">
                        </i>
                    </div>
                </td>
                <td v-if="editable">
                    <router-link :to="{
                        name: redirect,
                        params: { id: row['id'] }
                    }" class="clickable fa fa-edit">
                    </router-link>
                </td>
                <td v-if="deletable" class="clickable" @click="callbackDelete($event, row.id)">
                    <!-- <i class="fa fa-times"></i> -->
                    <!--  ci-dessus ... bug au passage à 0 rows... fontawesome ??? -->
                    <span>X</span>
                </td>
            </tr>
        </tbody>
        <tbody v-else class="body no-data">
            <tr>
                <td :colspan="headerRows.length">no results yet</td>
            </tr>
        </tbody>
    </table>
</template>

<script>
export default {
    props: ["headerRows", "bodyRows", "editable", "exclude", "deletable", "callbackDelete", "callbackSort", "redirect"]
}
</script>

<style lang="scss" scoped>

@import "./../../styles/global.scss";
svg {
  pointer-events: none;
}
.clickable {
  cursor: pointer;
}
.clickable:hover svg {
  color: $color_is_active;
}
.tabler {
    width: 100%;
}
.tabler thead tr,
.tabler tr:nth-child(even) {
    background: #c5cdcf;
}
.tabler td, th {
    border: 1px solid;
    padding: .5vw;
}
.tabler {
    border-collapse: collapse;
}

.tabler .header .cell {
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: space-around;
    padding: 0 .5vw;
}
.tabler .header .sorter {
    display: flex;
    flex-direction: column;
    max-height: 30px;
}
.tabler .body td {
    text-align: center;
}
</style>
