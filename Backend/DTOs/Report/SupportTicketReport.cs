namespace Server.DTOs.Report
{
    public class SupportTicketReport
    {
        public int TicketId { get; set; }

        public string  CreatedByEmployeeFirstName { get; set; }

        public string Problem { get; set; }

        public string Reply { get; set; }

        public string AgentFirstName { get; set; }

        public string Rating { get; set; }
    }
}
